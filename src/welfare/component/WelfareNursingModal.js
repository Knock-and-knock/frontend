import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfareReserveModal.module.css';
import { useNavigate } from 'react-router-dom';
import { useSpecHook } from 'welfare/component/WelfareInputTotal';
import { call } from 'login/service/ApiService';

function WelfareNursingModal({ closeModal }) {
  const [today, setToday] = useState('');
  const [welfareBookStartDate, setWelfarebookStartdate] = useState('');
  const [welfareBookUseTime, setDuration] = useState(0); // 초기 시간 설정 제거
  const [welfareBookTotalPrice, setWelfarebookTotalprice] = useState(0); // 초기 가격 설정 제거
  const navigate = useNavigate();
  const [matchData, setMatchData] = useState({});
  
  const { userSpec, setUserSpec } = useSpecHook();

  const goInputBirth = () => {
    navigate('/welfare-input/birth');
}


  useEffect(() => {
    call("/api/v1/match", "GET", null)
      .then((response) => {
        const data = {
          protegeUserName: response.protegeUserName,
        };
        
        setMatchData(data); // 로컬 상태 업데이트

        // userSpec에 protegeUserName 추가
        setUserSpec({
          ...userSpec,
          protegeUserName: response.protegeUserName,
          welfareNo: 2 // welfareNo 초기값 설정
        });
      })
      .catch((error) => {
        console.log(error.message);
      });

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    setToday(formattedDate);
  }, []);

  const handleDateChange = (event) => {
    const newStartDate = event.target.value || today;
    setWelfarebookStartdate(newStartDate);

    setUserSpec({
      ...userSpec,
      welfareBookStartDate: newStartDate,
      welfareBookEndDate: newStartDate
    });
  };

  const handleTimeChange = (event) => {
    const newDuration = parseInt(event.target.value, 10);
    setDuration(newDuration);
    
    const newPrice = 75000 * newDuration;
    setWelfarebookTotalprice(newPrice); // 계산된 가격을 상태에 저장

    setUserSpec({
      ...userSpec,
      welfareBookUseTime: newDuration,
      welfareBookTotalPrice: newPrice,
      welfarebookDurationText: `${newDuration * 3}시간 (${9 + (newDuration - 1) * 3}:00 ~ ${12 + (newDuration - 1) * 3}:00)`
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const isNextButtonDisabled = !welfareBookStartDate || welfareBookUseTime === 0;

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
              value={welfareBookStartDate}
              min={today} // 현재 날짜 이전 선택 불가
              onChange={handleDateChange}
            />
          </div>
          <div className={styles["reserve-info-container2"]}>
            <span className={styles["reserve-info-text"]}>시간</span>
            <select className={styles["insert-time"]} value={welfareBookUseTime} onChange={handleTimeChange}>
              <option value="0">시간 선택</option>
              <option value="1">3시간 (09:00 ~ 12:00)</option>
              <option value="2">6시간 (09:00 ~ 15:00)</option>
              <option value="3">9시간 (09:00 ~ 18:00)</option>
            </select>
          </div>
          <hr />
          <div className={styles["reserve-info-container3"]}>
            <span className={styles["reserve-price-text"]}>요금</span>
            <span className={styles.price}>{formatPrice(welfareBookTotalPrice)} 원</span>
          </div>
        </div>

        <span className={`${styles["main-text"]} ${styles["reserve-cancel"]}`} onClick={closeModal}>닫기</span>
        <span className={`${styles["main-text"]} ${styles["reserve-yeah"]}`} style={{ opacity: isNextButtonDisabled ? 0.5 : 1, pointerEvents: isNextButtonDisabled ? 'none' : 'auto' }} onClick={goInputBirth}>다음</span>
      </div>
    </div>
  );
}

export default WelfareNursingModal;
