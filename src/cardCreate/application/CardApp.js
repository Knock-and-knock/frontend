import { call } from "login/service/ApiService";
import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const CardCreateContext = createContext();
export const useCardCreate = () => useContext(CardCreateContext);

const FamilyCardContext = createContext();
export const useFamilyCardCreate = () => useContext(FamilyCardContext);

function CardApp(props) {
  const [userInfo, setUserInfo] = useState({});
  const [subUserInfo, setSubUserInfo] = useState({});
  //데이터전송로직
  const handleSendInfo = (e) => {
    call("http://122.128.54.136:20000/api/v1/card", "POST", userInfo)
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
    call("http://122.128.54.136:20000/api/v1/card", "POST", subUserInfo)
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
    console.log(subUserInfo);
  }, [userInfo, subUserInfo]);
  return (
    <div>
      <CardCreateContext.Provider
        value={{ userInfo, setUserInfo, handleSendInfo }}
      >
        <FamilyCardContext.Provider
          value={{ subUserInfo, setSubUserInfo, handlefSendInfo }}
        >
          <Outlet />
        </FamilyCardContext.Provider>
      </CardCreateContext.Provider>
    </div>
  );
}

export default CardApp;
