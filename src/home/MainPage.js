import Header from "home/component/Header";
import WelfareSlide from "home/component/WelfareSlide";
import ChatSection from "home/component/ChatSection";
import AlarmSection from "home/component/AlarmSection";
import CardSection from "home/component/CardSection";
import "home/MainPage.css"
import CardBottom from "./component/CardBottom";


function MainPage() {
  const userType = localStorage.getItem("loginUser");
  return (
    <div className="main-container">
      <Header/>
      <WelfareSlide/>
      {userType==="PROTEGE"?<ChatSection/>:<AlarmSection/>}
      <CardSection/>
      <CardBottom/>
    </div>
  );
}

export default MainPage;
