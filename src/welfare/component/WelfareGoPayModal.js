import React from 'react';
import styles from 'welfare/css/WelfareReserveCancelModal.module.css';

function WelfareGoPayModal({ closeModal }) {
  return (
    <div className={styles.container}>
      <div className={styles["main-container"]}>
        <div className={`${styles["main-section"]} ${styles["modal-container"]}`}>
          <p className={`${styles["main-text"]} ${styles["cancel-title"]}`}>결제</p>
          <hr />
          <div className={styles["really-container"]}>
            <span className={styles["total-price-text"]}>
              결제 페이지로 <span className={styles.blue}>이동</span>하시겠습니까?
            </span>
          </div>
          <span className={`${styles["main-text"]} ${styles["reserved-cancel-cancel"]}`} onClick={closeModal}>닫기</span>
          <span className={`${styles["main-text"]} ${styles["reserved-cancel-yeah"]}`}>예</span>
        </div>
      </div>
    </div>
  );
}

export default WelfareGoPayModal;
