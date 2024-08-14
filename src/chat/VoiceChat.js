import "chat/VoiceChat.css";
import chatbot from 'image/chatimage.png';

function VoiceChat(props) {

  return (
    <div className='voicechat-section'>
      <img src={chatbot} alt="챗봇" className="chatbot"/>
      <button className="chat-startBtn">똑똑!</button>
    </div>
  );
}

export default VoiceChat;