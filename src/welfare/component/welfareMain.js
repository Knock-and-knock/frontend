import React from 'react';
import 'welfare/css/WelfareMain.css';
import back from "image/Back.png";
import home from "image/gohome.png";

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-info">
          <img src={back} alt="뒤로가기" className="back-icon" />
          <h2 className="header-name">복지 서비스</h2>
          <img src={home} alt="뒤로가기" className="home-icon" />
        </div>
      </div>

      <div className="main-container">
        <div className="main-section" id="detailed-reserve">
          <p className="main-text" id="detailed-reserve-text">예약 내역 보기</p>
        </div>
        <div className="main-section" id="go-reserve">
          <p className="main-text" id="go-reserve-text">예약하러 가기</p>
        </div>
      </div>

    </div>
  );
}

export default App;