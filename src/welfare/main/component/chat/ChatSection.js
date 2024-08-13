import chatbot from "image/chatimage.png";
import 'welfare/main/component/chat/ChatSection.css';

function ChatSection(props) {
  return (
    <div className="main-section">
      <div className="chat-button">
        <img src={chatbot} alt="이상징후" className="icon" />
        <div className="main-text">
          <p className="head-text">똑똑이와 대화해보세요</p>
          <p className="info-text">마지막 대화시간 : 2시간전</p></div>
      </div>
    </div>
  );
}

export default ChatSection;
