import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const FamilyCardContext = createContext();
export const useFamilyCardCreate = () => useContext(FamilyCardContext);

function FamilyCardApp(props) {
  const [userInfo, setUserInfo] = useState({});
  //데이터전송로직
  const handleSendInfo = (e) => {
    console.log(userInfo);
  };
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/familycard/familycardyn");
  }, []);

  useEffect(()=>{
    console.log(userInfo)
  }, [userInfo]);
  return (
    <div>
      <FamilyCardContext.Provider value={{userInfo, setUserInfo, handleSendInfo}}>
        <Outlet />
      </FamilyCardContext.Provider>
    </div>
  );
}

export default FamilyCardApp;
