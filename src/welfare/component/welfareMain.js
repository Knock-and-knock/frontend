import React from 'react';
import styles from 'welfare/css/WelfareMain.module.css';
import welfare from "image/welfare.png";
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header.js';

function WelfareMain() {
  const navigate = useNavigate();

  const goDetailReserved = () => {
    navigate('/welfareReservedList');
  }

  const goDolbomMain = () => {
    navigate('/welfareList');
  }

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles["main-container"]}>
        <p className={styles["info-container"]}>
          <span className={styles["user-name"]}>홍길동님</span>
          <span className={styles.for}>을 위한</span>
        </p>
        <p className={styles.infomation}>복지 서비스를</p>
        <p className={styles.infomation}>똑똑에서 찾아보세요</p>
        <img src={welfare} alt="복지" className={styles["img-welfare"]} />
        <div className={`${styles["main-section"]} ${styles["detailed-reserve"]}`}>
          <p className={`${styles["main-text"]} ${styles["detailed-reserve-text"]}`} onClick={goDetailReserved}>예약 내역 보기</p>
        </div>
        <div className={`${styles["main-section"]} ${styles["go-reserve"]}`}>
          <p className={`${styles["main-text"]} ${styles["go-reserve-text"]}`} onClick={goDolbomMain}>예약하러 가기</p>
        </div>
      </div>
    </div>
  );
}

export default WelfareMain;
