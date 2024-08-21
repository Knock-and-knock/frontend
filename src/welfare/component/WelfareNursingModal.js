import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfareReserveModal.module.css';
import { useNavigate } from 'react-router-dom';

function WelfareNursingModal({ closeModal }) { 
  const [today, setToday] = useState('');
  const [price, setPrice] = useState(75000); // 기본 가격은 75,000 원 (3시간 기준)
  const navigate = useNavigate();

  const goInputBirth = () => {
      navigate('/welfare-input/birth');
  }

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    setToday(formattedDate);
  }, []);

  const handleDateChange = (event) => {
    setToday(event.target.value);
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;

    // 시간에 따라 가격 변경
    if (selectedTime === '3') {
      setPrice(75000);
    } else if (selectedTime === '6') {
      setPrice(150000);
    } else if (selectedTime === '9') {
      setPrice(225000);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <div className={styles.container}>
        <div className={`${styles["modal-section"]} ${styles["modal-container"]}`}>
          <p className={`${styles["modal-text"]} ${styles["reserve-modal-title"]}`}>가정간병 돌봄</p>
          
          <hr />
          <div className={styles["reserve-info-container1"]}>
            <span className={styles["reserve-info-text"]}>날짜</span>
            <input
              className={styles["insert-date"]}
              type="date"
              value={today}
              min={today}
              onChange={handleDateChange}
            />
          </div>
          <div className={styles["reserve-info-container2"]}>
            <span className={styles["reserve-info-text"]}>시간</span>
            <select className={styles["insert-time"]} type="dropbox" onChange={handleTimeChange}>
              <option value="3">3시간 (09:00 ~ 12:00)</option>
              <option value="6">6시간 (09:00 ~ 15:00)</option>
              <option value="9">9시간 (09:00 ~ 18:00)</option>
            </select>
          </div>
          <hr />
          <div className={styles["reserve-info-container3"]}>
            <span className={styles["reserve-price-text"]}>요금</span>
            <span className={styles.price}>{formatPrice(price)} 원</span>
          </div>

          <span className={`${styles["main-text"]} ${styles["reserve-cancel"]}`} onClick={closeModal}>닫기</span>
          <span className={`${styles["main-text"]} ${styles["reserve-yeah"]}`} onClick={goInputBirth}>다음</span>
        </div>
    </div>
  );
}

export default WelfareNursingModal;
