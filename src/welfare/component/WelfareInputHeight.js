import React from 'react';
import 'welfare/css/WelfareInputHeight.css'
import back from 'image/Back.png';
import home from "image/gohome.png";

function WelfareInputHeight() {
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
        <div id="infomation-container">
            <p className="infomation">키와 몸무게를</p>
            <p className="infomation">입력해 주세요</p>
        </div>

      
        <div id="input-container">
          <input className='input-height' type="number" placeholder="키"></input>
          <span id='cm'>cm</span>
          <input className='input-weight' type="number" placeholder="몸무게"></input>
          <span id='kg'>kg</span>
        </div>

        <div className="main-section" id="go-input-height">
          <p className="main-text" id="go-input-height-text">다음</p>
        </div>
      </div>
    </div>
    );
}

export default WelfareInputHeight;