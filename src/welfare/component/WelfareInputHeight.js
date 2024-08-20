import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfareInputHeight.module.css'; // CSS 모듈 import
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header.js';

function WelfareInputHeight() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const navigate = useNavigate();

    const goInputGender = () => {
        if (height && weight) {
            navigate('/welfare-input-gender');
        }
    }

    // height와 weight의 상태를 업데이트하고 3자리로 제한하는 함수
    const handleHeightChange = (e) => {
        const value = e.target.value;
        if (value.length <= 3) {
            setHeight(value);
        }
    };

    const handleWeightChange = (e) => {
        const value = e.target.value;
        if (value.length <= 3) {
            setWeight(value);
        }
    };

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles["main-container"]}>
                <div className={styles["infomation-container"]}>
                    <p className={styles.infomation}>키와 몸무게를</p>
                    <p className={styles.infomation}>입력해 주세요</p>
                </div>

                <div className={styles["input-container"]}>
                    <input
                        className={styles["input-height"]}
                        type="number"
                        placeholder="키"
                        value={height}
                        onChange={handleHeightChange}
                    />
                    <span className={styles.cm}>cm</span>
                    <input
                        className={styles["input-weight"]}
                        type="number"
                        placeholder="몸무게"
                        value={weight}
                        onChange={handleWeightChange}
                    />
                    <span className={styles.kg}>kg</span>
                </div>

                <div
                    className={`${styles["main-section"]} ${styles["go-input-gender"]}`}
                    onClick={goInputGender}
                    style={{
                        backgroundColor: height && weight ? '#80BAFF' : 'rgba(128,186,255,0.5)',
                    }}
                >
                    <p className={`${styles["main-text"]} ${styles["go-input-gender-text"]}`}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareInputHeight;
