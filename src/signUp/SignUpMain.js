import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./SignUpMain.css";

export const UserContext = createContext();
export const useMember = ()=>useContext(UserContext);

function SignUpMain(props) {
    const [userInfo, setUserInfo] = useState({});
    const handlechange =(e)=>{
        setUserInfo({...userInfo, [e.target.name]:e.target.value} );
    };
    useEffect(()=>{
        console.log(userInfo);
    }, [userInfo]);
    return (
        <div>
            <UserContext.Provider value={{userInfo, setUserInfo, handlechange}}>
                <Outlet/>
            </UserContext.Provider>


        </div>
    );
}

export default SignUpMain;