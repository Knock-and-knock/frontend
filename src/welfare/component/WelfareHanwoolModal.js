import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfareReserveModal.module.css';
import { useNavigate } from 'react-router-dom';
import { useSpecHook } from 'welfare/component/WelfareInputTotal';
import { call } from 'login/service/ApiService';

function WelfareHanwoolModal({ closeModal }) { 
  const [today, setToday] = useState('');
  const [welfareBookStartDate, setWelfareBookStartDate] = useState('');
  const [welfareBookEndDate, setWelfareBookEndDate] = useState('');
  const [welfareBookUseTime, setWelfareBookUseTime] = useState(1);
  const [welfareBookTotalPrice, setWelfareBookTotalPrice] = useState(2000000); // 초기 가격 설정
  const navigate = useNavigate();
  const { userSpec, setUserSpec } = useSpecHook();

  if (userSpec === undefined) setUserSpec({});

  const goInputBirth = () => {
    navigate('/welfare-input/birth');
  }

  useEffect(() => {
    // if (localStorage.getItem("loginUser") === "PROTECTOR") {
    //   call("/api/v1/match", "GET", null)
    //     .then((response) => {
    //       // userSpec에 protegeUserName 추가
    //       setUserSpec({
    //         ...userSpec,
    //         protegeUserName: response.protegeUserName,
    //         welfareNo: 3 // welfareNo 초기값 설정
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //     });
    // }
    
      call("/api/v1/match", "GET", null)
        .then((response) => {
          // userSpec에 protegeUserName 추가
          setUserSpec({
            ...userSpec,
            protegeUserName: response.protegeUserName,
            welfareNo: 3 // welfareNo 초기값 설정
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    setToday(formattedDate);
    setWelfareBookStartDate(formattedDate);
    setWelfareBookEndDate(formattedDate); // 초기 종료 날짜 설정

    const newUserSpec = {
      ...userSpec,
      welfareBookStartDate: formattedDate,
      welfareBookEndDate: formattedDate,
      welfareBookUseTime: 1,
      welfareBookTotalPrice: 2000000 // 초기 가격 설정
    };
    setUserSpec(newUserSpec);
  }, [setUserSpec]);

  const handleDateChange = (event) => {
    const newStartDate = event.target.value || today;
    setWelfareBookStartDate(newStartDate);
    setWelfareBookEndDate(newStartDate); // 종료 날짜를 시작 날짜와 동일하게 설정

    const updatedSpec = {
      ...userSpec,
      welfareBookStartDate: newStartDate,
      welfareBookEndDate: newStartDate
    };
    setUserSpec(updatedSpec);
  };

  const handleTimeChange = (event) => {
    const newDuration = parseInt(event.target.value, 10);
    setWelfareBookUseTime(newDuration);
    
    const newPrice = 2000000 * newDuration;
    setWelfareBookTotalPrice(newPrice); // 계산된 가격을 상태에 저장

    const updatedSpec = {
      ...userSpec,
      welfareBookUseTime: newDuration,
      welfareBookTotalPrice: newPrice,
      welfarebookDurationText: `${newDuration}개월`  // For display in CheckSpec
    };
    setUserSpec(updatedSpec);
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
            value={welfareBookStartDate}
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
            value={welfareBookEndDate}
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
          <span className={styles.price}>{formatPrice(welfareBookTotalPrice)} 원</span>
        </div>

        <span className={`${styles["main-text"]} ${styles["reserve-cancel"]}`} onClick={closeModal}>닫기</span>
        <span className={`${styles["main-text"]} ${styles["reserve-yeah"]}`} onClick={goInputBirth}>다음</span>
      </div>
  </div>
  );
}

export default WelfareHanwoolModal;
