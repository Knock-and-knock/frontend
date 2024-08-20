import React, { useState } from 'react';
import styles from 'welfare/css/WelfareInputBirth.module.css';
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header.js';

function WelfareInputBirth() {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [yearPlaceholder, setYearPlaceholder] = useState('년');
    const [monthPlaceholder, setMonthPlaceholder] = useState('월');
    const [dayPlaceholder, setDayPlaceholder] = useState('일');
    const navigate = useNavigate();

    const handleYearChange = (e) => {
        const value = e.target.value;
        if (value.length <= 4) {
            setYear(value);
        }
    };
    
    const handleMonthChange = (e) => {
        const value = e.target.value;
        if (value.length <= 2) {
            setMonth(value);
        }
    };
    
    const handleDayChange = (e) => {
        const value = e.target.value;
        if (value.length <= 2) {
            setDay(value);
        }
    };
    

    const goInputHeight = () => {
        if (year && month && day) {
            navigate('/welfare-input-height');
        }
    };

    const handleFocus = (setPlaceholder) => {
        setPlaceholder('');
    };

    const handleBlur = (value, setPlaceholder, defaultPlaceholder) => {
        if (!value) {
            setPlaceholder(defaultPlaceholder);
        }
    };

    const isButtonEnabled = year && month && day;

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
                    value={year}
                    onChange={handleYearChange}
                    onFocus={() => handleFocus(setYearPlaceholder)}
                    onBlur={(e) => handleBlur(e.target.value, setYearPlaceholder, '년')}
                />
                    <span className={styles["input-divide"]}>/</span>
                    <input
                        className={styles["input-date"]}
                        type="number"
                        placeholder={monthPlaceholder}
                        value={month}
                        onChange={handleMonthChange}
                        onFocus={() => handleFocus(setMonthPlaceholder)}
                        onBlur={(e) => handleBlur(e.target.value, setMonthPlaceholder, '월')}
                    />
                    <span className={styles["input-divide"]}>/</span>
                    <input
                        className={styles["input-date"]}
                        type="number"
                        placeholder={dayPlaceholder}
                        value={day}
                        onChange={handleDayChange}
                        onFocus={() => handleFocus(setDayPlaceholder)}
                        onBlur={(e) => handleBlur(e.target.value, setDayPlaceholder, '일')}
                    />
                </div>

                <div
                    className={`${styles["main-section"]} ${styles["go-input-height"]}`}
                    onClick={goInputHeight}
                    style={{
                        backgroundColor: isButtonEnabled ? '#80BAFF' : 'rgba(128,186,255,0.5)'
                    }}
                >
                    <p className={`${styles["main-text"]} ${styles["go-input-height-text"]}`}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareInputBirth;
