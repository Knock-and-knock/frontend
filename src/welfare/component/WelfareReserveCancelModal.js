import React from 'react';
import 'welfare/css/WelfareReserveCancelModal.css';

function WelfareReserveCancelModal() {
  return (
    <div className="container">

      <div className="main-container">
        <div className="main-section" id="modal-container">
          <p className="main-text" id="cancel-title">예약 취소</p>
          
          <hr></hr>
          <div id="really-container"><span id="total-price-text">정말로 예약을 <span className="blue">취소</span>하시겠습니까?</span></div>
            <span className="main-text" id="reserved-cancel-cancel">닫기</span>
            <span className="main-text" id="reserved-cancel-yeah">예</span>
          
        </div>
      </div>

    </div>
  );
}

export default WelfareReserveCancelModal;