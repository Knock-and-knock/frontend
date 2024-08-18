import React from 'react';
import 'welfare/css/WelfareInputAddress.css'
import back from 'image/Back.png';
import home from "image/gohome.png";
import glasses from "image/glasses.png";

function WelfareInputAddress() {
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
            <p className="infomation">집주소를</p>
            <p className="infomation">입력해 주세요</p>
        </div>

      
        <div id="Address-container">
          <div id='Address-section'>
            <input id='input-address' type="text" placeholder="도로명, 지번, 건물명 검색"></input>
            <img src={glasses} alt='돋보기'></img>
          </div>
          <input id='input-address-detail' type="text" placeholder="상세 주소"></input>
        </div>

        <div className="main-section" id="go-input-height">
          <p className="main-text" id="go-input-height-text">다음</p>
        </div>
      </div>
    </div>
    );
}

export default WelfareInputAddress;