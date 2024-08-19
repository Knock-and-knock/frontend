import React from 'react';
import 'welfare/css/WelfareCheckSpec.css'
import back from 'image/Back.png';
import home from "image/gohome.png";

function WelfareCheckSpec() {
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
            <p className="infomation">입력하신 정보가</p>
            <p className="infomation">맞는지 확인 해주세요</p>
        </div>
      
        <div id="spec-container">
          <p className='spec-info'>이름</p>
          <input className='spec-check' type="text" value="gdgd" readOnly></input>
          <p className='spec-info'>나이</p>
          <input className='spec-check' type="number" value="1234" readOnly></input>
          <p className='spec-info'>성별</p>
          <input className='spec-check' type="text" value="남성" readOnly></input>
          <p className='spec-info'>주소</p>
          <input className='spec-check' type="text" value="경기도 의왕시" readOnly></input>
          <p className='spec-info'>연락처</p>
          <input className='spec-check' type="text" value="010-2235-1234" readOnly></input>
          
          <p className='spec-info'>신체</p>
          <input className='spec-check-hw' type="number" placeholder="175" readOnly></input>
          <span className='hw'>cm</span>
          <input className='spec-check-hw' type="number" placeholder="180" readOnly></input>
          <span className='hw'>kg</span>

          <p className='spec-info'>질병</p>
          <input className='spec-check' id='disease' type="text" value="감기" readOnly></input>

        </div>

        <div className="main-section" id="go-input-height">
          <p className="main-text" id="go-input-height-text">다음</p>
        </div>

      </div>

    </div>
    );
}

export default WelfareCheckSpec;