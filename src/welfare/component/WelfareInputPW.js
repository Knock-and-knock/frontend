import React from 'react';
import 'welfare/css/WelfareInputPW.css'
import back from 'image/Back.png';
import home from "image/gohome.png";
import graycircle from "image/graycircle.png";
import bluecircle from "image/bluecircle.png";

function WelfareInputPW() {
    return (
    <div className="container">
        <div className="header">
        <div className="header-info">
          <img src={back} alt="뒤로가기" className="back-icon" />
          <p className="header-name">복지 서비스 예약하기</p>
          <img src={home} alt="홈 가기" className="home-icon" />
        </div>
      </div>

      <div className="main-container">
        <div id="pay-container">
            <p className="infomation">결제 시 사용하실</p>
            <p className="infomation">비밀번호 6자리를 설정해 주세요</p>
        </div>

      
        <div id="password-container">
          <div id='password-section'>
            <img id='circle1' src={graycircle} alt='회색'></img>
            <img id='circle2' src={graycircle} alt='회색'></img>
            <img id='circle3' src={graycircle} alt='회색'></img>
            <img id='circle4' src={graycircle} alt='회색'></img>
            <img id='circle5' src={graycircle} alt='회색'></img>
            <img id='circle6' src={graycircle} alt='회색'></img>
          </div>
        </div>

        <div className="main-section" id="go-input-height">
          <p className="main-text" id="go-input-height-text">다음</p>
        </div>
      </div>
    </div>
    );
}

export default WelfareInputPW;