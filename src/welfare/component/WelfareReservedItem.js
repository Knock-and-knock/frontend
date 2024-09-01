import React from 'react';
import styles from 'welfare/css/WelfareReservedList.module.css';

function WelfareReservedItem({ title, welfareBookReservationDate, welfareBookStartDate, welfareBookUsetime, welfareTotalPrice, onCancel }) {
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-CA'); // 'en-CA' 로케일은 yyyy-mm-dd 형식을 반환합니다.
  }

  const formattedwelfareBookReservationDate = formatDate(welfareBookReservationDate);
  
  return (
      <div className={`${styles["main-section"]} ${styles["detailed-reserve"]}`}>
        <p className={`${styles["main-text"]} ${styles["detailed-reserved-title"]}`}>{title}</p>
        <div className={styles["detailed-reserved-cancel-container"]}>
          <span className={`${styles["main-text"]} ${styles["detailed-reserved-date"]}`}>결제일: {formattedwelfareBookReservationDate}</span>
        </div>
        <span className={`${styles["main-text"]} ${styles["detailed-reserved-cancel"]}`} onClick={onCancel}>예약취소</span>
        <hr />
        <div className={styles["detailed-reserved-info-container1"]}>
          <span className={`${styles["main-text"]} ${styles["main-info"]}`}>예약 날짜</span>
          <span className={styles["detailed-reserved-text"]}>{welfareBookStartDate}</span>
        </div>
        <br />
        <div className={styles["detailed-reserved-info-container2"]}>
          <span className={`${styles["main-text"]} ${styles["main-info"]}`}>예약 시간</span>
          <span className={styles["detailed-reserved-text"]}>{welfareBookUsetime}</span>
        </div>
        <hr />
        <div className={styles["detailed-reserved-info-container3"]}>
          <span className={styles["total-price-text"]}>최종결제금액</span>
          <span className={styles["total-price-number"]}>{welfareTotalPrice} 원</span>
        </div>
      </div>
  );
}

export default WelfareReservedItem;
