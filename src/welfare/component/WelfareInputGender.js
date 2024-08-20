import React from 'react';
import styles from 'welfare/css/WelfareInputGender.module.css'; // CSS 모듈 import
import male from 'image/male.png';
import female from 'image/female.png';
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header.js';

function WelfareInputGender() {
    const navigate = useNavigate();

    const goInputGender = () => {
        navigate('/welfareInputAddress');
    }

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles["main-container"]}>
                <div className={styles["infomation-container"]}>
                    <p className={styles.infomation}>성별은</p>
                    <p className={styles.infomation}>어떻게 되시나요?</p>
                </div>

                <div className={styles["gender-container"]}>
                    <div className={styles["gender-section"]}>
                        <img src={male} alt="남성" className={styles["image-gender"]} />
                        <p className={styles["gender-text"]}>남성</p>
                    </div>
                    <div className={styles["gender-section"]}>
                        <img src={female} alt="여성" className={styles["image-gender"]} />
                        <p className={styles["gender-text"]}>여성</p>
                    </div>
                </div>

                <div className={`${styles["main-section"]} ${styles["go-input-address"]}`}>
                    <p className={`${styles["main-text"]} ${styles["go-input-address-text"]}`} onClick={goInputGender}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareInputGender;
