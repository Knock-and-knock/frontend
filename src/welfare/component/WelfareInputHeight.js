import React from 'react';
import styles from 'welfare/css/WelfareInputHeight.module.css'; // CSS 모듈 import
import back from 'image/Back.png';
import home from "image/gohome.png";

function WelfareInputHeight() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles["header-info"]}>
                    <img src={back} alt="뒤로가기" className={styles["back-icon"]} />
                    <p className={styles["header-name"]}>복지 서비스 예약하기</p>
                    <img src={home} alt="홈 가기" className={styles["home-icon"]} />
                </div>
            </div>

            <div className={styles["main-container"]}>
                <div className={styles["infomation-container"]}>
                    <p className={styles.infomation}>키와 몸무게를</p>
                    <p className={styles.infomation}>입력해 주세요</p>
                </div>

                <div className={styles["input-container"]}>
                    <input className={styles["input-height"]} type="number" placeholder="키" />
                    <span className={styles.cm}>cm</span>
                    <input className={styles["input-weight"]} type="number" placeholder="몸무게" />
                    <span className={styles.kg}>kg</span>
                </div>

                <div className={`${styles["main-section"]} ${styles["go-input-height"]}`}>
                    <p className={`${styles["main-text"]} ${styles["go-input-height-text"]}`}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareInputHeight;
