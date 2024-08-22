import { call } from "login/service/ApiService";
import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const FamilyCardContext = createContext();
export const useFamilyCardCreate = () => useContext(FamilyCardContext);

function FamilyCardApp(props) {
  const [subUserInfo, setSubUserInfo] = useState({});
  //데이터전송로직
  const handleSendInfo = (e) => {
    call('http://122.128.54.136:20000/api/v1/card',"POST",subUserInfo).then((response)=>{
      console.log(response);
      window.location.href = "/familycard/cardsuccess";
  }).catch((error)=>{
      alert("가족카드 발급에 실패했습니다.");
      window.location.href = "/familycard";
  });
  };
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/familycard/familycardyn");
  }, []);

  useEffect(()=>{
    console.log(subUserInfo)
  }, [subUserInfo]);
  return (
    <div>
      <FamilyCardContext.Provider value={{subUserInfo, setSubUserInfo, handleSendInfo}}>
        <Outlet />
      </FamilyCardContext.Provider>
    </div>
  );
}

export default FamilyCardApp;
