// chatScript.js

import { call } from "login/service/ApiService";

// 음성 끝났을 때 자동 답변 실행
export function handleAutoSub(roomNo, message, setChatResponse, setIsLoading, setIsSpeaking) {
  
  setIsLoading(false);
  setIsSpeaking(true);

  call("/api/v1/conversation", "POST", {
    input: message,
    conversationRoomNo: roomNo,
  })
    .then((response) => {
      const audioData = response.audioData;
      const content = response.content;
      console.log(content);
      setChatResponse(content);

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
      setIsLoading(true);
      setIsSpeaking(false);
      audio.onended = () => {
        setIsLoading(false); // 음성 출력이 끝나면 로딩 상태 해제
      };
    })
    .catch((error) => {
      alert("실패");
      console.error(error);
      setIsLoading(false); // 오류 발생 시 로딩 상태 해제
    });
}

// 음성 인식의 자동 시작 상태를 제어하는 함수
export function availabilityFunc(setRecognition, sendMessage) {
  const newRecognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  newRecognition.lang = "ko";
  newRecognition.maxAlternatives = 5;

  newRecognition.addEventListener("speechstart", () => {
    console.log("음성 인식 중...");
  });

  newRecognition.addEventListener("speechend", () => {
    console.log("음성 인식 종료");
  });

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
  setRecognition(newRecognition);
}

// 음성 인식을 자동으로 시작하는 함수
export function startAutoRecord(recognition) {
  recognition.start();
  console.log("음성 인식 자동 시작");
}

// 음성 인식을 중단하는 함수
export function endRecord(recognition) {
  recognition.stop();
  console.log("음성 인식 중단");
}

// 채팅 방을 설정하는 함수
export function handleChatRoom(userInfo, setRoomNo, availabilityFunc) {
  availabilityFunc();
  call("/api/v1/conversation-room", "POST", userInfo)
    .then((response) => {
      setRoomNo(response.conversationRoomNo);
    })
    .catch((error) => {
      alert("실패");
    });
}


