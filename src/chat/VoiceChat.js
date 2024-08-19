import "chat/VoiceChat.css";
import chatbot from "image/chatimage.png";
import { useState } from "react";
import Modal from "react-modal";

function VoiceChat(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const cStyle = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      width: "300px",
      height: "300px",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0 2px 4px #888",
      padding: "20px",
    },
  };

  return (
    <div className="voicechat-section">
      <img src={chatbot} alt="챗봇" className="chatbot" />
      <button className="chat-startBtn" onClick={openModal}>
        똑똑!
      </button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={cStyle}>
        <h1>모달창</h1>
        <p>모달컨텐츠</p>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
}

export default VoiceChat;
