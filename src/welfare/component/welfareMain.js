import React from 'react';
import 'welfare/css/WelfareMain.css';
import back from "image/Back.png";
import home from "image/gohome.png";
import welfare from "image/welfare.png";

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-info">
          <img src={back} alt="뒤로가기" className="back-icon" />
          <p className="header-name">복지 서비스</p>
          <img src={home} alt="홈 가기" className="home-icon" />
        </div>
      </div>

      <div className="main-container">
        <p id="info-container"><span className="user-name">홍길동님</span><span className='for'>을 위한</span></p>
        <p className="infomation">복지 서비스를</p>
        <p className="infomation">똑똑에서 찾아보세요</p>
        <img src={welfare} alt="복지" className="img-welfare" />
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