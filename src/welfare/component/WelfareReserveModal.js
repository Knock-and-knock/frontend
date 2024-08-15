import React from 'react';
import {useState, useEffect} from 'react';
import 'welfare/css/WelfareReserveModal.css';

function WelfareReserveModal() {
  const [today, setToday] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    setToday(formattedDate);
  }, []);


  return (
    <div className="container">

      <div className="main-container">
        <div className="main-section" id="modal-container">
          <p className="main-text" id="reserve-title">가정간병 돌봄</p>
          
          <hr></hr>
          <div id="reserve-info-container1"><span className="reserve-info-text">날짜</span><input id="insert-date" type="date" value={today}></input></div>
          <div id="reserve-info-container2"><span className="reserve-info-text">시간</span>
            <select id="insert-time" type="dropbox">
            <option value="option1">3시간 (09:00 ~ 12:00)</option>
            <option value="option2">6시간 (09:00 ~ 15:00)</option>
            <option value="option3">9시간 (09:00 ~ 18:00)</option>
            </select>
          </div>
          <hr></hr>
          <div id="reserve-info-container3"><span className="reserve-price-text">요금</span><span id="price">60,000 원</span></div>

          <span className="main-text" id="reserve-cancel">닫기</span>
          <span className="main-text" id="reserve-yeah">다음</span>
        </div>
      </div>

    </div>
  );
}

export default WelfareReserveModal;