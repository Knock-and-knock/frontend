import React from 'react';
import styles from 'welfare/css/WelfareInputAddress.module.css'; // CSS 모듈 import
import back from 'image/Back.png';
import home from "image/gohome.png";
import glasses from "image/glasses.png";

function WelfareInputAddress() {
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
                    <p className={`${styles["main-text"]} ${styles["go-input-height-text"]}`}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareInputAddress;
