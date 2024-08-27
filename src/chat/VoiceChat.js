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
import Loading from "./Loading";
import SpeakLoading from "./SpeakLoading";

function VoiceChat(props) {
  const [userInfo, setUserInfo] = useState("");
  const [recognition, setRecognition] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false); 
  const [roomNo, setRoomNo] = useState(null);
  const [chatResponse, setChatResponse] = useState("");
  
  const handleInputChange = (e) => {
    setUserInfo(e.target.value);
  };

  const handleChat = () => {
    setIsSpeaking(true);
    handleAutoSub(roomNo, userInfo, setChatResponse, setIsLoading, setIsSpeaking);
  };

  function sendMessage(recognizedText) {
    setChatResponse("");
    setIsSpeaking(true);
    handleAutoSub(roomNo, recognizedText, setChatResponse, setIsLoading, setIsSpeaking);
  }

  return (
    <div className="voicechat-section">
      <VoiceHeader />
      {isSpeaking && <SpeakLoading />}
      {isLoading && <Loading />}
      <img src={chatbot} alt="챗봇" className="chatbot" />
      <div>
        <button onClick={handleChat}>말ㅋ</button>
        <button onClick={() => startAutoRecord(recognition)}>시작</button>
        <button onClick={() => endRecord(recognition)}>종료</button>
      </div>
      <input name="mal" onChange={handleInputChange} />
      <textarea className="textbox" value={chatResponse} readOnly />
      <button
        className="chat-startBtn"
        onClick={() =>
          handleChatRoom(userInfo, setRoomNo, () =>
            availabilityFunc(setRecognition, sendMessage)
          )
        }
      >
        똑똑!
      </button>
    </div>
  );
}

export default VoiceChat;
