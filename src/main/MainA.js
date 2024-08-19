import ChatSection from "main/component/chat/ChatSection";
import HeaderA from "main/component/header/HeaderA";
import ButtonGroup from "main/component/serviceBtn/ButtonGroup";
import "main/Main.css";
import { useNavigate } from "react-router-dom";
import CardSectionA from "./component/card/CardSectionA";
import CardTagA from "./component/card/CardTagA";

function MainA() {
  //화면전환
  const navigate = useNavigate();
  //음성채팅화면 전환
  const handleVoiceChatClick=()=>{
    navigate("/voicechat");
  }
  return (
    <div className="containerA">
      <HeaderA />
      <ChatSection handleVoiceChatClick={handleVoiceChatClick}/>
      <ButtonGroup />
      <CardTagA/>
      <CardSectionA />
    </div>
  );
}

export default MainA;
