import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfareReserveModal.module.css';
import { useNavigate } from 'react-router-dom';

function WelfareHanwoolModal({ closeModal }) { 
  const [today, setToday] = useState('');
  const [endDate, setEndDate] = useState('');
  const [duration, setDuration] = useState(1);
  const navigate = useNavigate();

  const goInputBirth = () => {
      navigate('/welfare-input/birth');
  }


  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    setToday(formattedDate);
    calculateEndDate(formattedDate, duration); 
  }, []);

  const handleDateChange = (event) => {
    const newStartDate = event.target.value;
    setToday(newStartDate);
    calculateEndDate(newStartDate, duration);
  };

  const handleTimeChange = (event) => {
    const newDuration = parseInt(event.target.value.replace('option', ''), 10);
    setDuration(newDuration);
    calculateEndDate(today, newDuration);
  };

  const calculateEndDate = (startDate, duration) => {
    const start = new Date(startDate);
    start.setMonth(start.getMonth() + duration); 
    const formattedEndDate = start.toISOString().slice(0, 10);
    setEndDate(formattedEndDate);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <div className={styles.container}>
        <div className={`${styles["modal-section"]} ${styles["modal-container"]}`}>
          <p className={`${styles["modal-text"]} ${styles["reserve-modal-title"]}`}>한울 돌봄</p>
          
          <hr />
          <div className={styles["reserve-info-container1"]}>
            <span className={styles["reserve-info-text"]}>시작 날짜</span>
            <input
              className={styles["insert-start-date"]}
              type="date"
              value={today}
              min={today} // 현재 날짜 이전 선택 불가
              onChange={handleDateChange}
            />
            <br />
            <span className={styles["reserve-info-text"]}>종료 날짜</span>
            <input
              className={styles["end-date"]}
              type="date"
              value={endDate}
              disabled
            />
          </div>
          <div className={styles["reserve-info-container2"]}>
            <span className={styles["reserve-info-text"]}>기간</span>
            <select className={styles["insert-time"]} type="dropbox" onChange={handleTimeChange}>
              <option value="option1">1개월</option>
              <option value="option2">2개월</option>
              <option value="option3">3개월</option>
              <option value="option4">4개월</option>
              <option value="option5">5개월</option>
              <option value="option6">6개월</option>
            </select>
          </div>
          <hr />
          <div className={styles["reserve-info-container3"]}>
            <span className={styles["reserve-price-text"]}>요금</span>
            <span className={styles.price}>{formatPrice(2000000 * duration)} 원</span>
          </div>

          <span className={`${styles["main-text"]} ${styles["reserve-cancel"]}`} onClick={closeModal}>닫기</span>
          <span className={`${styles["main-text"]} ${styles["reserve-yeah"]}`} onClick={goInputBirth}>다음</span>
        </div>
    </div>
  );
}

export default WelfareHanwoolModal;
