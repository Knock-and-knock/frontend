import 'home/component/Button.css';
import chatbot from "image/icon/icon-chat.png";
import alarm from "image/payAlarm.png";
import { call } from 'login/service/ApiService';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Button({isProtege}) {
    const navi = useNavigate();

    // 페이지 이동
    const handleButtonClick = ()=>{
        if(isProtege){
            navi('/voicechat');
        }else {
            navi('/alarm')
        };
    }; 

    useEffect(()=>{
      //알람 건수
      // call().then().catch();
    },[]);

    return (
      <div className={`chat-section-container ${!isProtege ? 'blue-main' : ''}`} onClick={handleButtonClick}>
        <div className="chat-section-button">
          {isProtege ? <img src={chatbot} alt="챗봇" className="icon-chat" />:<img src={alarm} alt="이상징후" className="icon-alarm" />}
          <div className="chat-section-text">
            <p className="head-text">{isProtege?"똑똑이와 대화해보세요":"홍길동님의 소비이상징후"}</p>
            <p className="info-text">{isProtege?"마지막 대화시간 : ":"읽지 않은 알람 : "}<span>{isProtege?"없음":"0건"}</span></p>
          </div>
        </div>
      </div>
    );
}

export default Button;