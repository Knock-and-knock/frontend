import React from 'react';
import styles from 'welfare/css/WelfareReservedList.module.css';
import back from "image/Back.png";
import home from "image/gohome.png";

function WelfareReservedList() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles["header-info"]}>
          <img src={back} alt="뒤로가기" className={styles["back-icon"]} />
          <p className={styles["header-name"]}>예약된 복지 서비스</p>
          <img src={home} alt="홈 가기" className={styles["home-icon"]} />
        </div>
      </div>

      <div className={styles["main-container"]}>
        <div className={`${styles["main-section"]} ${styles["detailed-reserve"]}`}>
          <p className={`${styles["main-text"]} ${styles["detailed-reserved-title"]}`}>가정간병 돌봄</p>
          <div className={styles["detailed-reserved-cancel-container"]}>
            <span className={`${styles["main-text"]} ${styles["detailed-reserved-date"]}`}>결제일: 2024.08.07</span>
          </div>
          <span className={`${styles["main-text"]} ${styles["detailed-reserved-cancel"]}`}>예약취소</span>
          <hr />
          <div className={styles["detailed-reserved-info-container1"]}>
            <span className={`${styles["main-text"]} ${styles["main-info"]}`}>예약 날짜</span>
            <span className={styles["detailed-reserved-text"]}>2026년 12월 29일</span>
          </div>
          <br />
          <div className={styles["detailed-reserved-info-container2"]}>
            <span className={`${styles["main-text"]} ${styles["main-info"]}`}>예약 시간</span>
            <span className={styles["detailed-reserved-text"]}>오전 3시간 (09:00 ~ 12:00)</span>
          </div>
          <hr />
          <div className={styles["detailed-reserved-info-container3"]}>
            <span className={styles["total-price-text"]}>최종결제금액</span>
            <span className={styles["total-price-number"]}>60,000 원</span>
          </div>
        </div>

        <div className={`${styles["main-section"]} ${styles["detailed-reserve"]}`}>
        <p className={`${styles["main-text"]} ${styles["detailed-reserved-title"]}`}>가정간병 돌봄</p>
          <div className={styles["detailed-reserved-cancel-container"]}>
            <span className={`${styles["main-text"]} ${styles["detailed-reserved-date"]}`}>결제일: 2024.08.07</span>
          </div>
          <span className={`${styles["main-text"]} ${styles["detailed-reserved-cancel"]}`}>예약취소</span>
          <hr />
          <div className={styles["detailed-reserved-info-container1"]}>
            <span className={`${styles["main-text"]} ${styles["main-info"]}`}>예약 날짜</span>
            <span className={styles["detailed-reserved-text"]}>2026년 12월 29일</span>
          </div>
          <br />
          <div className={styles["detailed-reserved-info-container2"]}>
            <span className={`${styles["main-text"]} ${styles["main-info"]}`}>예약 시간</span>
            <span className={styles["detailed-reserved-text"]}>오전 3시간 (09:00 ~ 12:00)</span>
          </div>
          <hr />
          <div className={styles["detailed-reserved-info-container3"]}>
            <span className={styles["total-price-text"]}>최종결제금액</span>
            <span className={styles["total-price-number"]}>60,000 원</span>
          </div>
        </div>

        <div className={`${styles["main-section"]} ${styles["detailed-reserve"]}`}>
        <p className={`${styles["main-text"]} ${styles["detailed-reserved-title"]}`}>가정간병 돌봄</p>
          <div className={styles["detailed-reserved-cancel-container"]}>
            <span className={`${styles["main-text"]} ${styles["detailed-reserved-date"]}`}>결제일: 2024.08.07</span>
          </div>
          <span className={`${styles["main-text"]} ${styles["detailed-reserved-cancel"]}`}>예약취소</span>
          <hr />
          <div className={styles["detailed-reserved-info-container1"]}>
            <span className={`${styles["main-text"]} ${styles["main-info"]}`}>예약 날짜</span>
            <span className={styles["detailed-reserved-text"]}>2026년 12월 29일</span>
          </div>
          <br />
          <div className={styles["detailed-reserved-info-container2"]}>
            <span className={`${styles["main-text"]} ${styles["main-info"]}`}>예약 시간</span>
            <span className={styles["detailed-reserved-text"]}>오전 3시간 (09:00 ~ 12:00)</span>
          </div>
          <hr />
          <div className={styles["detailed-reserved-info-container3"]}>
            <span className={styles["total-price-text"]}>최종결제금액</span>
            <span className={styles["total-price-number"]}>60,000 원</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WelfareReservedList;
