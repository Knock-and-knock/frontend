import "chat/VoiceChat.css";
import chatbot from "image/chat-char.png";
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
  const [roomNum, setRoomNum] = useState("");
  const handleInputChange = (e) => {
    setUserInfo(e.target.value);
  };

  const handleChat = () => {
    call("/api/v1/conversation", "POST", {
      input: userInfo,
      conversationRoomNo: roomNum,
    })
      .then((response) => {
        const audioData = response.audioData;
        const message = response.message;

        const byteCharacters = atob(audioData);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const audioBlob = new Blob([byteArray], { type: "audio/wav" });

        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
      })
      .catch((error) => {
        alert("실패");
        console.error(error);
      });
  };

  const handleChatRoom = () => {
    call("/api/v1/conversation-room", "POST", userInfo)
      .then((response) => {
        console.log(response);
        setRoomNum(response.conversationRoomNo);
      })
      .catch((error) => {
        alert("실패");
      });
  };

  return (
    <div className="voicechat-section">
      <img src={chatbot} alt="챗봇" className="chatbot" />
      <input name="mal" onChange={handleInputChange} />
      <button onClick={handleChat}>말ㅋ</button>
      <button className="chat-startBtn" onClick={handleChatRoom}>
        똑똑!
      </button>
      {/* <Modal isOpen={isOpen} onRequestClose={closeModal} style={cStyle}>
        <h1>모달창</h1>
        <p>모달컨텐츠</p>
        <button onClick={closeModal}>닫기</button>
      </Modal> */}
    </div>
  );
}

export default VoiceChat;
