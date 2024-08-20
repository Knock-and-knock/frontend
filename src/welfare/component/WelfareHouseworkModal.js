import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfareReserveModal.module.css';
import { useNavigate } from 'react-router-dom';

function WelfareHouseworkModal({ closeModal }) { 
  const [today, setToday] = useState('');
  const [selectedTime, setSelectedTime] = useState('option1'); // 기본 값은 3시간
  const [price, setPrice] = useState(75000); // 기본 요금은 3시간 요금
  const navigate = useNavigate();

  const goInputBirth = () => {
      navigate('/welfareInputBirth');
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
    const selectedOption = event.target.value;
    setSelectedTime(selectedOption);

    // 선택된 옵션에 따라 가격 설정
    let newPrice = 75000;
    if (selectedOption === 'option2') {
      newPrice = 150000;
    } else if (selectedOption === 'option3') {
      newPrice = 225000;
    }
    setPrice(newPrice);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <div className={styles.container}>
        <div className={`${styles["modal-section"]} ${styles["modal-container"]}`}>
          <p className={`${styles["modal-text"]} ${styles["reserve-modal-title"]}`}>일상가사 돌봄</p>
          
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
            <select 
              className={styles["insert-time"]} 
              value={selectedTime} 
              onChange={handleTimeChange}
            >
              <option value="option1">3시간 (09:00 ~ 12:00)</option>
              <option value="option2">6시간 (09:00 ~ 15:00)</option>
              <option value="option3">9시간 (09:00 ~ 18:00)</option>
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

export default WelfareHouseworkModal;
