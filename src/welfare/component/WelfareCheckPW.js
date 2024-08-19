import React, { useState, useRef } from 'react';
import styles from 'welfare/css/WelfareCheckPW.module.css'; // CSS 모듈 import
import back from 'image/Back.png';
import home from "image/gohome.png";

function WelfareCheckPW() {
    const [password, setPassword] = useState("");
    const inputRef = useRef(null);

    const handleCircleClick = () => {
        // 이미지 클릭 시 숨겨진 input에 포커스를 줌
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const value = e.target.value.slice(0, 6);
        setPassword(value);
    };

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
                <div className={styles["pay-container"]}>
                    <p className={styles.infomation}>결제 비밀번호를 입력하세요</p>
                </div>

                <div className={styles["password-container"]} onClick={handleCircleClick}>
                    <div className={styles["password-section"]}>
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <div
                                key={index}
                                className={password.length >= index ? styles.bluecircle : styles.graycircle}
                            />
                        ))}
                    </div>
                </div>

                {/* 숨겨진 input 요소 */}
                <input
                    ref={inputRef}
                    type="number"
                    value={password}
                    onChange={handleChange}
                    className={styles["hidden-input"]}
                />

                <div className={`${styles["main-section"]} ${styles["go-pay"]}`}>
                    <p className={`${styles["main-text"]} ${styles["go-pay-text"]}`}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareCheckPW;
