import React, { useState } from 'react';
import styles from 'welfare/css/WelfareInputBirth.module.css';
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header.js';

function WelfareInputBirth() {
    const [yearPlaceholder, setYearPlaceholder] = useState('년');
    const [monthPlaceholder, setMonthPlaceholder] = useState('월');
    const [dayPlaceholder, setDayPlaceholder] = useState('일');
    const navigate = useNavigate();

    const goInputHeight = () => {
        navigate('/welfareInputHeight');
    }

    const handleFocus = (setPlaceholder) => {
        setPlaceholder('');
    };

    const handleBlur = (value, setPlaceholder, defaultPlaceholder) => {
        if (!value) {
            setPlaceholder(defaultPlaceholder);
        }
    };

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles["main-container"]}>
                <div className={styles["infomation-container"]}>
                    <p className={styles.infomation}>생년월일을</p>
                    <p className={styles.infomation}>입력해 주세요</p>
                </div>

                <div className={styles["input-container"]}>
                    <input
                        className={styles["input-date"]}
                        type="number"
                        placeholder={yearPlaceholder}
                        onFocus={() => handleFocus(setYearPlaceholder)}
                        onBlur={(e) => handleBlur(e.target.value, setYearPlaceholder, '년')}
                    />
                    <span className={styles["input-divide"]}>/</span>
                    <input
                        className={styles["input-date"]}
                        type="number"
                        placeholder={monthPlaceholder}
                        onFocus={() => handleFocus(setMonthPlaceholder)}
                        onBlur={(e) => handleBlur(e.target.value, setMonthPlaceholder, '월')}
                    />
                    <span className={styles["input-divide"]}>/</span>
                    <input
                        className={styles["input-date"]}
                        type="number"
                        placeholder={dayPlaceholder}
                        onFocus={() => handleFocus(setDayPlaceholder)}
                        onBlur={(e) => handleBlur(e.target.value, setDayPlaceholder, '일')}
                    />
                </div>

                <div className={`${styles["main-section"]} ${styles["go-input-height"]}`}>
                    <p className={`${styles["main-text"]} ${styles["go-input-height-text"]}`} onClick={goInputHeight}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareInputBirth;
