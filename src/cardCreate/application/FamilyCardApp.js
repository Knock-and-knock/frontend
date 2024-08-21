import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const FamilyCardContext = createContext();
export const useFamilyCardCreate = () => useContext(FamilyCardContext);

function FamilyCardApp(props) {
  const [subUserInfo, setSubUserInfo] = useState({});
  //데이터전송로직
  const handleSendInfo = (e) => {
    console.log(subUserInfo);
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
