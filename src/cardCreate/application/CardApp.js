import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const CardCreateContext = createContext();
export const useCardCreate = () => useContext(CardCreateContext);

function CardApp(props) {
  const [userInfo, setUserInfo] = useState({});
  const handleSendInfo = (e) => {
    console.log(userInfo);
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
