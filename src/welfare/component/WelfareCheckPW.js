import React, { useState, useRef } from 'react';
import styles from 'welfare/css/WelfareCheckPW.module.css'; // CSS 모듈 import
import Header from 'header/Header.js';

function WelfareCheckPW() {
    const [password, setPassword] = useState("");
    const inputRef = useRef(null);

    const handleCircleClick = () => {
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const value = e.target.value.slice(0, 6);
        setPassword(value);
    };

    return (
        <div className={styles.container}>
            <Header />

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
