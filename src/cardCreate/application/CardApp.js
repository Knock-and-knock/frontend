import { call } from "login/service/ApiService";
import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const CardCreateContext = createContext();
export const useCardCreate = () => useContext(CardCreateContext);


function CardApp(props) {
  const [userInfo, setUserInfo] = useState({});
  //데이터전송로직
  const handleSendInfo = (e) => {
    call('http://122.128.54.136:20000/api/v1/card',"POST",userInfo).then((response)=>{
      console.log(response);
      window.location.href = "/familycard/familycardyn";
  }).catch((error)=>{
      alert("카드발급에 실패했습니다.");
      window.location.href = "/cardapp";
  });

  };
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/cardapp/defaultinfo");
  }, []);

  useEffect(()=>{
    console.log(userInfo)
  }, [userInfo]);
  return (
    <div>
      <CardCreateContext.Provider value={{userInfo, setUserInfo, handleSendInfo}}>
        <Outlet />
      </CardCreateContext.Provider>
    </div>
  );
}

export default CardApp;
