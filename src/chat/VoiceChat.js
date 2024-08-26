import "chat/VoiceChat.css";
import VoiceHeader from "chat/VoiceHeader";
import chatbot from "image/chat-char.png";
import { call } from "login/service/ApiService";
import { useState } from "react";
import Loading from "./Loading";
import SpeakLoading from "./SpeakLoading";

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
  const [recognition, setRecognition] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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

  // 음성 인식의 자동 시작 상태를 제어하는 변수
  function availabilityFunc() {
    //try {
      const newRecognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      newRecognition.lang = "ko"; // 음성인식에 사용되고 반환될 언어를 설정한다.
      newRecognition.maxAlternatives = 5; //음성 인식결과를 5개 까지 보여준다.
      console.log("음성 인식이 초기화되었습니다.");

      newRecognition.addEventListener("speechstart", () => {
        console.log("음성 인식 중...");
      });

      newRecognition.addEventListener("speechend", () => {
        console.log("음성 인식 종료");
        // 음성 인식이 종료되더라도 자동으로 시작하지 않음
        // 재생이 끝나면 자동으로 시작될 예정
      });

      // 음성인식 결과를 반환하고 자동으로 챗봇으로 전송
      newRecognition.addEventListener("result", (e) => {
        const recognizedText = e.results[0][0].transcript;
        console.log(recognizedText);
        sendMessage(recognizedText);
      });

      if (!newRecognition) {
        console.log("음성 인식을 지원하지 않는 브라우저입니다.");
      } else {
        console.log("음성 인식이 초기화되었습니다.");
      }
      setRecognition(newRecognition); // recognition 상태 업데이트
    //} catch (e) {
      //alert("현재 브라우저는 음성 인식을 지원하지 않습니다.");
    //}
  }

  // 음성 인식을 자동으로 시작하는 함수
  function startAutoRecord() {
    recognition.start();
    console.log("음성 인식 자동 시작");
  }

  // 🛑 클릭 시 종료(안 눌러도 음성인식은 알아서 종료됨)
  function endRecord() {
    recognition.stop(); // 음성인식을 중단하고 중단까지의 결과를 반환
    console.log("음성 인식 중단");
  }

  const handleChatRoom = () => {
    availabilityFunc();
    call("/api/v1/conversation-room", "POST", userInfo)
      .then((response) => {
        console.log(response);
        setRoomNum(response.conversationRoomNo);
      })
      .catch((error) => {
        alert("실패");
      });
  };

  function sendMessage(){

  }

  return (
    <div className="voicechat-section">
      <VoiceHeader />
      <SpeakLoading/>
      <Loading/>
      <img src={chatbot} alt="챗봇" className="chatbot" />
      {/* <div>
        <button onClick={handleChat}>말ㅋ</button>
        <button onClick={startAutoRecord}>시작</button>
        <button onClick={endRecord}>종료</button>
      </div>
      <input name="mal" onChange={handleInputChange} />  */}
      <textarea className="textbox" readOnly/>
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
