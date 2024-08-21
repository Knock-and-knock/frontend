import React, { useState } from 'react';
import styles from 'welfare/css/WelfareInputGender.module.css'; // CSS 모듈 import
import male from 'image/male.png';
import female from 'image/female.png';
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header.js';
import { useSpecHook } from 'welfare/component/WelfareInputTotal';


function WelfareInputGender() {
    const [selectedGender, setSelectedGender] = useState(null);
    const navigate = useNavigate();

    const {userSpec, setUserSpec, handlechange} = useSpecHook();

    const goInputAddress = () => {
        if (selectedGender) {
            navigate('/welfare-input/address');
        }
    };

    const handleGenderClick = (gender) => {
        setSelectedGender(gender);
    };

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles["main-container"]}>
                <div className={styles["infomation-container"]}>
                    <p className={styles.infomation}>성별은</p>
                    <p className={styles.infomation}>어떻게 되시나요?</p>
                </div>

                <div className={styles["gender-container"]}>
                    <div
                        className={`${styles["gender-section"]} ${selectedGender === 'male' ? styles["selected-gender-section"] : ''}`}
                        onClick={() => handleGenderClick('male')}
                    >
                        <img src={male} alt="남성" className={styles["image-gender"]} />
                        <p className={styles["gender-text"]}>남성</p>
                    </div>
                    <div
                        className={`${styles["gender-section"]} ${selectedGender === 'female' ? styles["selected-gender-section"] : ''}`}
                        onClick={() => handleGenderClick('female')}
                    >
                        <img src={female} alt="여성" className={styles["image-gender"]} />
                        <p className={styles["gender-text"]}>여성</p>
                    </div>
                </div>

                <div
                    className={`${styles["main-section"]} ${styles["go-input-address"]}`}
                    onClick={goInputAddress}
                    style={{
                        backgroundColor: selectedGender ? '#80BAFF' : 'rgba(128, 186, 255, 0.5)',
                        cursor: selectedGender ? 'pointer' : 'not-allowed',
                    }}
                >
                    <p className={`${styles["main-text"]} ${styles["go-input-address-text"]}`}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareInputGender;
