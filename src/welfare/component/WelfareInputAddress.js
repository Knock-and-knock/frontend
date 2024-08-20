import React from 'react';
import styles from 'welfare/css/WelfareInputAddress.module.css'; // CSS 모듈 import
import glasses from "image/glasses.png";
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header.js';

function WelfareInputAddress() {
    const navigate = useNavigate();

    const goInputDisease = () => {
        navigate('/welfareInputDisease');
    }

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles["main-container"]}>
                <div className={styles["infomation-container"]}>
                    <p className={styles.infomation}>집주소를</p>
                    <p className={styles.infomation}>입력해 주세요</p>
                </div>

                <div className={styles["address-container"]}>
                    <div className={styles["address-section"]}>
                        <input className={styles["input-address"]} type="text" placeholder="도로명, 지번, 건물명 검색" />
                        <img src={glasses} alt="돋보기" className={styles["glasses-icon"]} />
                    </div>
                    <input className={styles["input-address-detail"]} type="text" placeholder="상세 주소" />
                </div>

                <div className={`${styles["main-section"]} ${styles["go-input-height"]}`}>
                    <p className={`${styles["main-text"]} ${styles["go-input-height-text"]}`} onClick={goInputDisease}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareInputAddress;
