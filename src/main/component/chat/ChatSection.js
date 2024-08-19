import chatbot from "image/chatimage.png";
import 'main/component/chat/ChatSection.css';

function ChatSection({handleVoiceChatClick}) {
  return (
    <div className="chat-section" onClick={handleVoiceChatClick}>
      <div className="chat-button">
        <img src={chatbot} alt="챗봇" className="icon" />
        <div className="main-text">
          <p className="chat-head-text">똑똑이와 대화해보세요</p>
          <p className="chat-info-text">마지막 대화시간 : 2시간전</p></div>
      </div>
    </div>
  );
}

export default ChatSection;
