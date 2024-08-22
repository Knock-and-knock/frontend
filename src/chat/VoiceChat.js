import "chat/VoiceChat.css";
import chatbot from "image/chatimage.png";
import { call } from "login/service/ApiService";
import { useState } from "react";

function VoiceChat(props) {
  /*const [isOpen, setIsOpen] = useState(false);

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
  };*/

  const [userInfo, setUserInfo] = useState("");
  const handleInputChange = (e) => {
    setUserInfo(e.target.value);
  };
  const handleChat=()=>{
    call("http://122.128.54.136:20000/api/v1/conversation", "POST", userInfo)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert("실패")
      });
  }

  return (
    <div className="voicechat-section">
      <img src={chatbot} alt="챗봇" className="chatbot" />
      <input name="mal" onChange={handleInputChange} />
      <button onClick={handleChat}>말ㅋ</button>
      <button className="chat-startBtn">똑똑!</button>
      {/* <Modal isOpen={isOpen} onRequestClose={closeModal} style={cStyle}>
        <h1>모달창</h1>
        <p>모달컨텐츠</p>
        <button onClick={closeModal}>닫기</button>
      </Modal> */}
    </div>
  );
}

export default VoiceChat;
