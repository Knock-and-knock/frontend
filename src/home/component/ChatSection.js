import chatbot from "image/icon/icon-chat.png";
import 'home/component/ChatSection.css';
import { useNavigate } from "react-router-dom";

function ChatSection() {
  const navi = useNavigate();
  const handleVoiceChatClick = ()=>{
    navi('/voicechat');
  }; 
  return (
    <div className="chat-section-container" onClick={handleVoiceChatClick}>
      <div className="chat-section-button">
        <img src={chatbot} alt="챗봇" className="icon-chat" />
        <div className="chat-section-text">
          <p className="head-text">똑똑이와 대화해보세요</p>
          <p className="info-text">마지막 대화시간 : <span>없음</span></p>
        </div>
      </div>
    </div>
  );
}

export default ChatSection;
