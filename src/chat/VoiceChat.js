import {
  availabilityFunc,
  endRecord,
  handleAutoSub,
  handleChatRoom,
  startAutoRecord,
} from "chat/chatScript";
import "chat/VoiceChat.css";
import VoiceHeader from "chat/VoiceHeader";
import chatbot from "image/chat-char.png";
import { useState } from "react";
import Modal from "react-modal";
import Loading from "./Loading";
import SpeakLoading from "./SpeakLoading";

function VoiceChat(props) {
  const [userInfo, setUserInfo] = useState("");
  // const [recognition, setRecognition] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  // const [roomNo, setRoomNo] = useState(null);
  const [chatResponse, setChatResponse] = useState("");
  const [visible, setVisible] = useState(false);
  const [isStart, setIsStart] = useState(false);
  //예약확인 모달
  // const [isProtege, setIsProtege] = useState(true);
  // const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    setUserInfo(e.target.value);
  };

  const handleChat = () => {
    setIsSpeaking(true);
    handleAutoSub(
      userInfo,
      setChatResponse,
      setIsLoading,
      setIsSpeaking,
      handleChat
    );
  };

  function sendMessage(recognizedText) {
    setChatResponse("");
    setIsLoading(true);
    handleAutoSub(
      recognizedText,
      setChatResponse,
      setIsLoading,
      setIsSpeaking,
      handleChat
    );
  }

  const handleStartChat = async () => {
    if (!isStart) {
      await handleChatRoom(userInfo);
      availabilityFunc(sendMessage);
      startAutoRecord();
      setIsStart(true);
    } else {
      endRecord(); //너 왜안되니...
      setIsStart(false);
    }
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 100,
    },
    content: {
      backgroundColor: null,
      border: null,
    },
  };

  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <div className="voicechat-section">
      <VoiceHeader />
      {isSpeaking && <SpeakLoading />}
      {isLoading && <Loading />}
      <img src={chatbot} alt="챗봇" className="chatbot" />
      <button className="hiddenBtn" onClick={toggleModal}>
        {visible ? "닫기" : "답변보이기"}
      </button>
      <button className="chat-startBtn" onClick={handleStartChat}>
        {isStart ? "중지" : "똑똑!"}
      </button>

      {/* Modal 컴포넌트 */}
      <Modal isOpen={visible} onRequestClose={toggleModal} style={customStyles}>
        <textarea className="textbox" value={chatResponse} readOnly />
      </Modal>
      {/* {isOpen && (
        <MatchingModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleSubmit={handleSubmit}
        />
      )} */}
    </div>
  );
}

export default VoiceChat;
