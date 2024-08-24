import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfarePayComplete.module.css';
import { useNavigate } from 'react-router-dom';

function WelfarePayComplete() {
  const navigate = useNavigate();
  const [today, setToday] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0].replace(/-/g, '.');
    setToday(formattedDate);
  }, []);

  const goDetailReserved = () => {
    navigate('/welfare-reserved-list');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles["header-info"]}>
          <h2 className={styles["header-name"]}>
            <span className={styles["pay-com"]}>결제가 완료</span>되었습니다.
          </h2>
          <h2 className={styles["header-date"]}>{today}</h2>
        </div>
      </div>

      <div className={styles["main-container"]}>
        <hr />
        <p className={styles["pay-title"]}>
          홍길동 <span className={styles.gender}>(남성)</span>
        </p>
        <hr className={styles["dotted-hr"]} />
        <p>
          <span className={styles["pay-info-cate"]}>예약 항목</span>
          <span className={styles["pay-info-title"]}>가정 간병 돌봄</span>
        </p>
        <p>
          <span className={styles["pay-info-cate"]}>예약 날짜</span>
          <span className={styles["pay-info-title"]}>2024년 09월 01일</span>
        </p>
        <p>
          <span className={styles["pay-info-cate"]}>예약 시간</span>
          <span className={styles["pay-info-title"]}>9시간 (09:00 ~ 18:00)</span>
        </p>
        <hr />
        <p>
          <span className={styles["pay-info-tprice"]}>최종결제금액</span>
          <span className={styles["pay-info-price"]}>225,000 원</span>
        </p>
      </div>
      <div className={`${styles["main-section"]} ${styles["go-main"]}`} onClick={goDetailReserved}>
        <p className={`${styles["main-text"]} ${styles["go-main-text"]}`}>예약내역 보러가기</p>
      </div>
    </div>
  );
}

export default WelfarePayComplete;
