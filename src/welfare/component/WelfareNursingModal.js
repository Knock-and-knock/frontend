import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfareReserveModal.module.css';
import { useNavigate } from 'react-router-dom';
import { useSpecHook } from 'welfare/component/WelfareInputTotal';
import { call } from 'login/service/ApiService';

function WelfareNursingModal({ closeModal }) { 
  const [today, setToday] = useState('');
  const [welfarebookStartdate, setWelfarebookStartdate] = useState('');
  const [welfarebookUsetime, setDuration] = useState(1);
  const [welfarebookTotalprice, setWelfarebookTotalprice] = useState(75000); // 초기 가격 설정
  const navigate = useNavigate();
  const [matchData, setMatchData] = useState({});

  const { userSpec, setUserSpec } = useSpecHook();

  if (userSpec === undefined) setUserSpec({});

  const goInputBirth = () => {
      navigate('/welfare-input/birth');
  }
  

  useEffect(() => {
    if (localStorage.getItem("loginUser") === "PROTECTOR") {
      call("/api/v1/match", "GET", null)
        .then((response) => {
          const data = {
            protegeUserName: response.protegeUserName,
          };
          setMatchData(data); // 로컬 상태 업데이트
  
          // userSpec에 protegeUserName 추가
          setUserSpec({
            ...userSpec,
            protegeUserName: response.protegeUserName
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);

    setToday(formattedDate);
    setWelfarebookStartdate(formattedDate);
    const initialPrice = 75000 * welfarebookUsetime;
    setWelfarebookTotalprice(initialPrice);

    const newUserSpec = { 
      ...userSpec, 
      welfarebookStartdate: formattedDate, 
      welfarebookEnddate: formattedDate, // 종료 날짜를 시작 날짜와 동일하게 설정
      welfarebookUsetime, 
      welfarebookTotalprice: initialPrice // 초기 가격을 userSpec에 추가
    };
    setUserSpec(newUserSpec);
    console.log("Updated userSpec:", newUserSpec);
  }, []);

  const handleDateChange = (event) => {
    const newStartDate = event.target.value || today;
    setWelfarebookStartdate(newStartDate);

    // 시작 날짜를 변경할 때 종료 날짜도 동일하게 설정
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
    setDuration(newDuration);
    
    const newPrice = 75000 * newDuration;
    setWelfarebookTotalprice(newPrice); // 계산된 가격을 상태에 저장

    const updatedSpec = {
        ...userSpec,
        welfarebookUsetime: newDuration,
        welfarebookTotalprice: newPrice,
        welfarebookDurationText: `${newDuration * 3}시간 (${9 + (newDuration - 1) * 3}:00 ~ ${12 + (newDuration - 1) * 3}:00)`
        
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
          <p className={`${styles["modal-text"]} ${styles["reserve-modal-title"]}`}>가정 간병 돌봄</p>
          
          <hr />
          <div className={styles["reserve-info-container-box"]}>
          <div className={styles["reserve-info-container1"]}>
            <span className={styles["reserve-info-text"]}>날짜</span>
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
          </div>

          <span className={`${styles["main-text"]} ${styles["reserve-cancel"]}`} onClick={closeModal}>닫기</span>
          <span className={`${styles["main-text"]} ${styles["reserve-yeah"]}`} onClick={goInputBirth}>다음</span>
        </div>
    </div>
  );
}

export default WelfareNursingModal;
