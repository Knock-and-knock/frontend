import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfareReserveModal.module.css';
import { useNavigate } from 'react-router-dom';
import { useSpecHook } from 'welfare/component/WelfareInputTotal';

function WelfareHouseworkModal({ closeModal }) { 
  const [today, setToday] = useState('');
  const [welfarebookStartdate, setWelfarebookStartdate] = useState('');
  const [welfarebookUsetime, setWelfarebookUsetime] = useState(1);
  const [welfarebookTotalprice, setCalculatedPrice] = useState(0); // 계산된 가격을 위한 상태 추가
  const navigate = useNavigate();

  const { userSpec, setUserSpec } = useSpecHook();

  if (userSpec === undefined) setUserSpec({});

  const goInputBirth = () => {
      navigate('/welfare-input/birth');
  }

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    setToday(formattedDate);
    setWelfarebookStartdate(formattedDate);

    const initialPrice = 75000 * welfarebookUsetime;
    setCalculatedPrice(initialPrice); // 초기 가격 계산
    const newUserSpec = { 
      ...userSpec, 
      welfarebookStartdate: formattedDate, 
      welfarebookEnddate: formattedDate,  // 종료 날짜를 시작 날짜와 동일하게 설정
      welfarebookUsetime,
      welfarebookTotalprice: initialPrice // 계산된 가격을 userSpec에 추가
    };
    setUserSpec(newUserSpec);
    console.log("Updated userSpec:", newUserSpec);
  }, []);

  const handleDateChange = (event) => {
    const newStartDate = event.target.value;
    setWelfarebookStartdate(newStartDate);

    const updatedSpec = { 
      ...userSpec, 
      welfarebookStartdate: newStartDate, 
      welfarebookEnddate: newStartDate // 종료 날짜를 시작 날짜와 동일하게 설정
    };
    setUserSpec(updatedSpec);
    console.log("Updated userSpec:", updatedSpec);
  };

  const handleTimeChange = (event) => {
    const newDuration = parseInt(event.target.value, 10);
    setWelfarebookUsetime(newDuration);

    const newPrice = 75000 * newDuration;
    setCalculatedPrice(newPrice); // 가격을 다시 계산하여 상태에 저장

    const updatedSpec = { 
      ...userSpec, 
      welfarebookUsetime: newDuration,
      welfarebookTotalprice: newPrice // 계산된 가격을 userSpec에 추가
    };
    setUserSpec(updatedSpec);
    console.log("Updated userSpec:", updatedSpec);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <div className={styles.container}>
        <div className={`${styles["modal-section"]} ${styles["modal-container"]}`}>
          <p className={`${styles["modal-text"]} ${styles["reserve-modal-title"]}`}>일상 가사 돌봄</p>
          
          <hr />
          <div className={styles["reserve-info-container1"]}>
            <span className={styles["reserve-info-text"]}>시작 날짜</span>
            <input
              className={styles["insert-start-date"]}
              type="date"
              value={welfarebookStartdate}
              min={today} // 현재 날짜 이전 선택 불가
              onChange={handleDateChange}
            />
          </div>
          <div className={styles["reserve-info-container2"]}>
            <span className={styles["reserve-info-text"]}>시간</span>
            <select className={styles["insert-time"]} type="dropbox" onChange={handleTimeChange}>
              <option value="1">3시간 (09:00 ~ 12:00)</option>
              <option value="2">6시간 (09:00 ~ 15:00)</option>
              <option value="3">9시간 (09:00 ~ 18:00)</option>
            </select>
          </div>
          <hr />
          <div className={styles["reserve-info-container3"]}>
            <span className={styles["reserve-price-text"]}>요금</span>
            <span className={styles.price}>{formatPrice(welfarebookTotalprice)} 원</span>
          </div>

          <span className={`${styles["main-text"]} ${styles["reserve-cancel"]}`} onClick={closeModal}>닫기</span>
          <span className={`${styles["main-text"]} ${styles["reserve-yeah"]}`} onClick={goInputBirth}>다음</span>
        </div>
    </div>
  );
}

export default WelfareHouseworkModal;
