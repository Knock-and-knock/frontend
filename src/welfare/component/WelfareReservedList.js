import React from 'react';
import 'welfare/css/WelfareReservedList.css';
import back from "image/Back.png";
import home from "image/gohome.png";

function App() {
  return (
    <div className="container">

      <div className="header">
        <div className="header-info">
          <img src={back} alt="뒤로가기" className="back-icon" />
          <p className="header-name">예약된 복지 서비스</p>
          <img src={home} alt="홈 가기" className="home-icon" />
        </div>
      </div>

      <div className="main-container">
        <div className="main-section" id="detailed-reserve">
          <p className="main-text" id="detailed-reserved-title">가정간병 돌봄</p>
          <div id="detailed-reserved-cancel-container"><span className="main-text" id="detailed-reserved-date">결제일: 2024.08.07</span></div>
          <span className="main-text" id="detailed-reserved-cancel">예약취소</span>
          <hr></hr>
          <div id="detailed-reserved-info-container1"><span className="main-text main-info">예약 날짜</span><span className="detailed-reserved-text">2026년 12월 29일</span></div>
          <br></br>
          <div id="detailed-reserved-info-container2"><span className="main-text main-info">예약 시간</span><span className="detailed-reserved-text">오전 3시간 (09:00 ~ 12:00)</span></div>
          <hr></hr>
          <div id="detailed-reserved-info-container3"><span id="total-price-text">최종결제금액</span><span id="total-price-number">60,000 원</span></div>
        </div>
        <div className="main-section" id="detailed-reserve">
          <p className="main-text" id="detailed-reserved-title">가정간병 돌봄</p>
          <div id="detailed-reserved-cancel-container"><span className="main-text" id="detailed-reserved-date">결제일: 2024.08.07</span></div>
          <span className="main-text" id="detailed-reserved-cancel">예약취소</span>
          <hr></hr>
          <div id="detailed-reserved-info-container1"><span className="main-text main-info">예약 날짜</span><span className="detailed-reserved-text">2026년 12월 29일</span></div>
          <br></br>
          <div id="detailed-reserved-info-container2"><span className="main-text main-info">예약 시간</span><span className="detailed-reserved-text">오전 3시간 (09:00 ~ 12:00)</span></div>
          <hr></hr>
          <div id="detailed-reserved-info-container3"><span id="total-price-text">최종결제금액</span><span id="total-price-number">60,000 원</span></div>
        </div>
        <div className="main-section" id="detailed-reserve">
          <p className="main-text" id="detailed-reserved-title">가정간병 돌봄</p>
          <div id="detailed-reserved-cancel-container"><span className="main-text" id="detailed-reserved-date">결제일: 2024.08.07</span></div>
          <span className="main-text" id="detailed-reserved-cancel">예약취소</span>
          <hr></hr>
          <div id="detailed-reserved-info-container1"><span className="main-text main-info">예약 날짜</span><span className="detailed-reserved-text">2026년 12월 29일</span></div>
          <br></br>
          <div id="detailed-reserved-info-container2"><span className="main-text main-info">예약 시간</span><span className="detailed-reserved-text">오전 3시간 (09:00 ~ 12:00)</span></div>
          <hr></hr>
          <div id="detailed-reserved-info-container3"><span id="total-price-text">최종결제금액</span><span id="total-price-number">60,000 원</span></div>
        </div>
      </div>

    </div>
  );
}

export default App;