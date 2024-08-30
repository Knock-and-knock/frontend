import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfareReserveModal.module.css';
import { useNavigate } from 'react-router-dom';
import { useSpecHook } from 'welfare/component/WelfareInputTotal';

function WelfareHanwoolModal({ closeModal }) { 
  const [today, setToday] = useState('');
  const [welfarebookStartdate, setWelfarebookStartdate] = useState('');
  const [welfarebookEnddate, setWelfarebookEnddate] = useState('');
  const [welfarebookUsetime, setWelfarebookUsetime] = useState(1);
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
    const initialEndDate = calculateEndDate(formattedDate, welfarebookUsetime);
    setWelfarebookEnddate(initialEndDate);

    const newUserSpec = { ...userSpec, welfarebookStartdate: formattedDate, welfarebookEnddate: initialEndDate, welfarebookUsetime };
    setUserSpec(newUserSpec);
    console.log("Updated userSpec:", newUserSpec);
  }, []);

  const handleDateChange = (event) => {
    let newStartDate = event.target.value;
    if (newStartDate === '') {
      // 날짜가 삭제되면 현재 날짜로 설정
      newStartDate = today;
    }
    setWelfarebookStartdate(newStartDate);
    const newEndDate = calculateEndDate(newStartDate, welfarebookUsetime);
    setWelfarebookEnddate(newEndDate);

    const updatedSpec = { ...userSpec, welfarebookStartdate: newStartDate, welfarebookEnddate: newEndDate };
    setUserSpec(updatedSpec);
    console.log("Updated userSpec:", updatedSpec);
  };

  const handleTimeChange = (event) => {
    const newDuration = parseInt(event.target.value, 10);
    setWelfarebookUsetime(newDuration);
    const newEndDate = calculateEndDate(welfarebookStartdate, newDuration);
    setWelfarebookEnddate(newEndDate);

    const updatedSpec = { ...userSpec, welfarebookUsetime: newDuration, welfarebookEnddate: newEndDate };
    setUserSpec(updatedSpec);
    console.log("Updated userSpec:", updatedSpec);
  };

  const calculateEndDate = (welfarebookStartdate, welfarebookUsetime) => {
    const start = new Date(welfarebookStartdate);
    start.setMonth(start.getMonth() + welfarebookUsetime); 
    return start.toISOString().slice(0, 10);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <div className={styles.container}>
        <div className={`${styles["modal-section"]} ${styles["modal-container"]}`}>
          <p className={`${styles["modal-text"]} ${styles["reserve-modal-title"]}`}>한울 돌봄</p>
          
          <hr />
          <div className={styles["reserve-info-container11"]}>
            <div className={styles["start-date-container"]}>
            <span className={styles["reserve-info-text"]}>시작 날짜</span>
            <input
              className={styles["insert-start-date"]}
              type="date"
              value={welfarebookStartdate}
              min={today} // 현재 날짜 이전 선택 불가
              onChange={handleDateChange}
            />
            </div>
            <br />
            <div className={styles["end-date-container"]}>
            <span className={styles["reserve-info-text"]}>종료 날짜</span>
            <input
              className={styles["end-date"]}
              type="date"
              value={welfarebookEnddate}
              disabled
            />
            </div>
          </div>
          <div className={`${styles["reserve-info-container2"]} ${styles["reserve-info-container2-option"]}`}>
            <span className={styles["reserve-info-text1"]}>기간</span>
            <select className={styles["insert-period"]} type="dropbox" onChange={handleTimeChange}>
              <option value="1">1개월</option>
              <option value="2">2개월</option>
              <option value="3">3개월</option>
              <option value="4">4개월</option>
              <option value="5">5개월</option>
              <option value="6">6개월</option>
            </select>
          </div>
          <hr />
          <div className={styles["reserve-info-container3"]}>
            <span className={styles["reserve-price-text"]}>요금</span>
            <span className={styles.price}>{formatPrice(2000000 * welfarebookUsetime)} 원</span>
          </div>

          <span className={`${styles["main-text"]} ${styles["reserve-cancel"]}`} onClick={closeModal}>닫기</span>
          <span className={`${styles["main-text"]} ${styles["reserve-yeah"]}`} onClick={goInputBirth}>다음</span>
        </div>
    </div>
  );
}

export default WelfareHanwoolModal;
