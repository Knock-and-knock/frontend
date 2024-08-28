import { call } from "login/service/ApiService";
import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const CardCreateContext = createContext();
export const useCardCreate = () => useContext(CardCreateContext);


function CardApp(props) {
  const [userInfo, setUserInfo] = useState({});
  //데이터전송로직
  const handleSendInfo = (e) => {
    call("/api/v1/card", "POST", userInfo)
      .then((response) => {
        console.log(response);
        navigate("/cardapp/familycardyn");
      })
      .catch((error) => {
        //alert("카드발급에 실패했습니다.");
        //navigate("/cardapp");
        navigate("/cardapp/familycardyn");
      });
  };

  const handlefSendInfo = (e) => {
    call("/api/v1/card", "POST", userInfo)
      .then((response) => {
        console.log(response);
        navigate("/cardapp/cardsuccess");
      })
      .catch((error) => {
        //alert("가족카드 발급에 실패했습니다.");
        //navigate("/cardapp/familycardyn");
        navigate("/cardapp/cardsuccess");//임시(나중에 삭제)
      });
  };

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/cardapp/defaultinfo");
  }, []);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  return (
    <div>
      <CardCreateContext.Provider
        value={{ userInfo, setUserInfo, handleSendInfo, handlefSendInfo }}
      >
          <Outlet />
      </CardCreateContext.Provider>
    </div>
  );
}

export default CardApp;
