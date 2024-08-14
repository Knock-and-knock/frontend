import React from 'react';
import 'welfare/css/WelfarePayComplete.css';


function WelfarePayComplete() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-info">
          <h2 className="header-name"><span className="pay-com">결제가 완료</span>되었습니다.</h2>
          <h2 className="header-date">2024.08.01</h2>
        </div>
      </div>

      <div className="main-container">
        <hr></hr>
        <p id="pay-title">손동희 <span id="gender">(남성)</span></p>
        <hr id="dotted"></hr>
        <p><span className="pay-info-cate">예약 항목</span><span className="pay-info-title">병원 동행 돌봄</span></p>
        <p><span className="pay-info-cate">예약 날짜</span><span className="pay-info-title">2026년 12월 29일</span></p>
        <p><span className="pay-info-cate">예약 시간</span><span className="pay-info-title">오전 3시간 (09:00 ~ 12:00)</span></p>
        <hr></hr>
        <p><span className="pay-info-tprice">최종결제금액</span><span className="pay-info-price">60,000 원</span></p>
      </div>
      <div className="main-section" id="go-main">
          <p className="main-text" id="go-main-text">메인으로 돌아가기</p>
      </div>
    </div>
  );
}

export default WelfarePayComplete;