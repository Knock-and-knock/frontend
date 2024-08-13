import React from 'react';
import 'welfare/css/WelfarePayComplete.css';


function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-info">
          <h2 className="header-name"><span>결제가 완료</span>되었습니다.</h2>
          <h2 className="header-date">2024.08.01</h2>
        </div>
      </div>

      <div className="main-container">
        <hr></hr>
        <p id="pay-title">손동희 <span id="gender">(남성)</span></p>
        <hr id="dotted"></hr>
        <p id="pay-info-title">병원 동행 돌봄</p>
        <p id="pay-info-date">2024.08.13 (화) 09:00 ~ 18:00</p>
        <p id="pay-info-price">60,000 원</p>
        <hr></hr>
        <p><span>60,000원</span>최종결제금액</p>
      </div>
      <div className="main-section" id="go-main">
          <p className="main-text" id="go-main-text">메인으로 돌아가기</p>
        </div>
    </div>
  );
}

export default App;