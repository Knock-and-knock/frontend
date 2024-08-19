import React from 'react';
import 'welfare/css/WelfareInputGender.css'
import back from 'image/Back.png';
import home from "image/gohome.png";
import male from 'image/male.png';
import female from 'image/female.png';

function WelfareInputGender() {
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
            <p className="infomation">성별은</p>
            <p className="infomation">어떻게 되시나요?</p>
        </div>

      
        <div id="gender-container">
          <div className="gender-section">
            <img src={male} alt='남성' className='image-gender'></img>
            <p className="gender-text">남성</p>
          </div>
          <div className="gender-section">
          <img src={female} alt='여성' className='image-gender'></img>
            <p className="gender-text">여성</p>
          </div>
        </div>

        <div className="main-section" id="go-input-address">
          <p className="main-text" id="go-input-address-text">다음</p>
        </div>
      </div>
    </div>
    );
}

export default WelfareInputGender;