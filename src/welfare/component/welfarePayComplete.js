import React from 'react';
import styles from 'welfare/css/WelfarePayComplete.module.css';

function WelfarePayComplete() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles["header-info"]}>
          <h2 className={styles["header-name"]}>
            <span className={styles["pay-com"]}>결제가 완료</span>되었습니다.
          </h2>
          <h2 className={styles["header-date"]}>2024.08.01</h2>
        </div>
      </div>

      <div className={styles["main-container"]}>
        <hr />
        <p className={styles["pay-title"]}>
          손동희 <span className={styles.gender}>(남성)</span>
        </p>
        <hr className={styles["dotted-hr"]} />
        <p>
          <span className={styles["pay-info-cate"]}>예약 항목</span>
          <span className={styles["pay-info-title"]}>병원 동행 돌봄</span>
        </p>
        <p>
          <span className={styles["pay-info-cate"]}>예약 날짜</span>
          <span className={styles["pay-info-title"]}>2026년 12월 29일</span>
        </p>
        <p>
          <span className={styles["pay-info-cate"]}>예약 시간</span>
          <span className={styles["pay-info-title"]}>오전 3시간 (09:00 ~ 12:00)</span>
        </p>
        <hr />
        <p>
          <span className={styles["pay-info-tprice"]}>최종결제금액</span>
          <span className={styles["pay-info-price"]}>60,000 원</span>
        </p>
      </div>
      <div className={`${styles["main-section"]} ${styles["go-main"]}`}>
        <p className={`${styles["main-text"]} ${styles["go-main-text"]}`}>메인으로 돌아가기</p>
      </div>
    </div>
  );
}

export default WelfarePayComplete;
