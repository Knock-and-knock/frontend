import React from 'react';
import styles from 'welfare/css/WelfareCheckSpec.module.css'; // CSS 모듈 import
import back from 'image/Back.png';
import home from "image/gohome.png";

function WelfareCheckSpec() {
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
                    <p className={styles.infomation}>입력하신 정보가</p>
                    <p className={styles.infomation}>맞는지 확인 해주세요</p>
                </div>

                <div className={styles["spec-container"]}>
                    <p className={styles["spec-info"]}>이름</p>
                    <input className={styles["spec-check"]} type="text" value="gdgd" disabled />
                    <p className={styles["spec-info"]}>나이</p>
                    <input className={styles["spec-check"]} type="number" value="1234" disabled />
                    <p className={styles["spec-info"]}>성별</p>
                    <input className={styles["spec-check"]} type="text" value="남성" disabled />
                    <p className={styles["spec-info"]}>주소</p>
                    <input className={styles["spec-check"]} type="text" value="경기도 의왕시" disabled />
                    <p className={styles["spec-info"]}>연락처</p>
                    <input className={styles["spec-check"]} type="text" value="010-2235-1234" disabled />

                    <p className={styles["spec-info"]}>신체</p>
                    <input className={styles["spec-check-hw"]} type="number" placeholder="175" disabled />
                    <span className={styles.hw}>cm</span>
                    <input className={styles["spec-check-hw"]} type="number" placeholder="180" disabled />
                    <span className={styles.hw}>kg</span>

                    <p className={styles["spec-info"]}>질병</p>
                    <input className={`${styles["spec-check"]} ${styles.disease}`} type="text" value="감기" disabled />
                </div>

                <div className={`${styles["main-section"]} ${styles["go-password"]}`}>
                    <p className={`${styles["main-text"]} ${styles["go-password-text"]}`}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareCheckSpec;
