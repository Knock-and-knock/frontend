import {
  availabilityFunc,
  handleAutoSub,
  handleChatRoom,
  startAutoRecord
} from "chat/chatScript";
import "chat/VoiceChat.css";
import VoiceHeader from "chat/VoiceHeader";
import chatbot from "image/chat-char.png";
import { useState } from "react";
import Loading from "./Loading";
import SpeakLoading from "./SpeakLoading";

function VoiceChat(props) {
  const [userInfo, setUserInfo] = useState("");
  // const [recognition, setRecognition] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  // const [roomNo, setRoomNo] = useState(null); // **변경된 부분: useState로 관리하던 roomNo 제거**
  const [chatResponse, setChatResponse] = useState("");

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
    await handleChatRoom(userInfo);
    availabilityFunc(sendMessage);
    startAutoRecord();
  };

  return (
    <div className="voicechat-section">
      <VoiceHeader />
      {isSpeaking && <SpeakLoading />}
      {isLoading && <Loading />}
      <img src={chatbot} alt="챗봇" className="chatbot" />
      <textarea className="textbox" value={chatResponse} readOnly />
      <button className="chat-startBtn" onClick={handleStartChat}>
        똑똑!
      </button>
    </div>
  );
}

export default VoiceChat;