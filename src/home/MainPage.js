import Button from "home/component/Button";
import Header from "home/component/Header";
import WelfareSlide from "home/component/WelfareSlide";
import "home/MainPage.css";
import { useEffect, useState } from "react";
import CardSlide from "./component/CardSlide";

function MainPage() {
  const [isProtege, setIsProtege] = useState(true);
  
    useEffect(()=>{
        const userType  = localStorage.getItem("loginUser");
        if(userType === "PROTECTOR"){
            setIsProtege(false);
        }
       
    },[])
  return (
    <div className="main-container">
      <Header isProtege={isProtege}/>
      <WelfareSlide/>
      <Button isProtege={isProtege}/>
      <CardSlide isProtege={isProtege}/>
    </div>
  );
}

export default MainPage;
