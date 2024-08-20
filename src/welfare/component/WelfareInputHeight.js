import React from 'react';
import styles from 'welfare/css/WelfareInputHeight.module.css'; // CSS 모듈 import
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header.js';

function WelfareInputHeight() {
    const navigate = useNavigate();

    const goInputGender = () => {
        navigate('/welfareInputGender');
    }

    return (
        <div className={styles.container}>
            <Header />

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
                    <p className={`${styles["main-text"]} ${styles["go-input-height-text"]}`} onClick={goInputGender}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareInputHeight;
