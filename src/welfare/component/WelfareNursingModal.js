import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfareReserveModal.module.css';
import { useNavigate } from 'react-router-dom';
import { useSpecHook } from 'welfare/component/WelfareInputTotal';

function WelfareNursingModal({ closeModal }) { 
  const [today, setToday] = useState('');
  const [welfarebookStartdate, setWelfarebookStartdate] = useState('');
  const [welfarebookEnddate, setWelfarebookEnddate] = useState('');
  const [welfarebookUsetime, setDuration] = useState(1);
  const [totalDays, setTotalDays] = useState(1); // 날짜 차이를 계산할 상태
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
    setWelfarebookEnddate(formattedDate); // 초기에는 종료 날짜를 시작 날짜와 동일하게 설정
   
    const newUserSpec = { ...userSpec, welfarebookStartdate: formattedDate, welfarebookEnddate: formattedDate, welfarebookUsetime };
    setUserSpec(newUserSpec);
    console.log("Updated userSpec:", newUserSpec);
  }, []);

  const handleDateChange = (event) => {
    const newStartDate = event.target.value || today;
    setWelfarebookStartdate(newStartDate);

    // 만약 새로운 시작 날짜가 종료 날짜보다 늦으면 종료 날짜를 시작 날짜로 업데이트
    if (newStartDate > welfarebookEnddate) {
      setWelfarebookEnddate(newStartDate);
      const updatedSpec = { ...userSpec, welfarebookStartdate: newStartDate, welfarebookEnddate: newStartDate };
      setUserSpec(updatedSpec);
      console.log("Updated userSpec:", updatedSpec);
    } else {
      calculateTotalDays(newStartDate, welfarebookEnddate); // 날짜 차이 계산
      const updatedSpec = { ...userSpec, welfarebookStartdate: newStartDate };
      setUserSpec(updatedSpec);
      console.log("Updated userSpec:", updatedSpec);
    }
  };

  const handleEndDateChange = (event) => {
    const newEndDate = event.target.value || welfarebookEnddate;
    setWelfarebookEnddate(newEndDate);
    calculateTotalDays(welfarebookStartdate, newEndDate); // 날짜 차이 계산
    
    const updatedSpec = { ...userSpec, welfarebookEnddate: newEndDate };
    setUserSpec(updatedSpec);
    console.log("Updated userSpec:", updatedSpec);
  };

  const handleTimeChange = (event) => {
    const newDuration = parseInt(event.target.value.replace('option', ''), 10);
    setDuration(newDuration);
    
    const updatedSpec = { ...userSpec, welfarebookUsetime: newDuration };
    setUserSpec(updatedSpec);
    console.log("Updated userSpec:", updatedSpec);
  };

  const calculateTotalDays = (start, end) => {
    const welfarebookStartdate = new Date(start);
    const welfarebookEnddate = new Date(end);
    const diffTime = Math.abs(welfarebookEnddate - welfarebookStartdate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // 차이 계산 후 하루를 더함
    setTotalDays(diffDays);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <div className={styles.container}>
        <div className={`${styles["modal-section"]} ${styles["modal-container"]}`}>
          <p className={`${styles["modal-text"]} ${styles["reserve-modal-title"]}`}>가정 간병 돌봄</p>
          
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
            <br />
            <span className={styles["reserve-info-text"]}>종료 날짜</span>
            <input
              className={styles["end-date"]}
              type="date"
              value={welfarebookEnddate}
              min={welfarebookStartdate}
              onChange={handleEndDateChange} // 사용자가 직접 종료 날짜를 입력할 수 있도록 onChange 핸들러 추가
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
            <span className={styles.price}>{formatPrice(75000 * welfarebookUsetime * totalDays)} 원</span>
          </div>

          <span className={`${styles["main-text"]} ${styles["reserve-cancel"]}`} onClick={closeModal}>닫기</span>
          <span className={`${styles["main-text"]} ${styles["reserve-yeah"]}`} onClick={goInputBirth}>다음</span>
        </div>
    </div>
  );
}

export default WelfareNursingModal;
