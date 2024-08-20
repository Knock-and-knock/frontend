import React, { useState } from 'react';
import styles from 'welfare/css/WelfareInputDisease.module.css'; // CSS 모듈 import
import check from "image/check.png";
import checked from "image/checked.png";
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header.js';

function WelfareInputDisease() {
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

    const goCheckSpec = () => {
        navigate('/welfareCheckSpec');
    }

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const getStyle = (id) => {
    return {
      borderColor: selectedId === id ? '#80BAFF' : ''
    };
  };

  const renderContent = () => {
    switch (selectedId) {
      case 'yes-disease':
        return (
          <div className={styles["disease-list-container"]}>
            <div className={styles["disease-list-section1"]}>
              <p className={styles["disease-list-button"]}>뇌졸중</p>
              <p className={styles["disease-list-button"]}>심근경색</p>
              <p className={styles["disease-list-button"]}>고혈압</p>
            </div>
            <div className={styles["disease-list-section2"]}>
              <p className={styles["disease-list-button"]}>당뇨병</p>
              <p className={styles["disease-list-button"]}>이상지질 혈증</p>
              <p className={styles["disease-list-button"]}>폐 결핵</p>
            </div>

            <p className={styles["info-guitar"]}>기타</p>
            <input className={styles["input-guitar"]} placeholder="기타질환을 입력 해주세요"></input>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles["main-container"]}>
        <div className={styles["infomation-container"]}>
          <p className={styles.infomation}>가지고 계신</p>
          <p className={styles.infomation}>질환이 있나요?</p>
        </div>

        <div className={styles["disease-container"]}>
          <div
            className={styles["input-no-disease"]}
            style={getStyle('no-disease')}
            onClick={() => handleClick('no-disease')}
          >
            <button className={styles["disease-section"]}>기저질환이 없어요</button>
            <img
              src={selectedId === 'no-disease' ? checked : check}
              alt="체크"
              className={styles["img-check"]}
            />
          </div>

          <div
            className={styles["input-yes-disease"]}
            style={getStyle('yes-disease')}
            onClick={() => handleClick('yes-disease')}
          >
            <button className={styles["disease-section"]}>기저질환이 있어요</button>
            <img
              src={selectedId === 'yes-disease' ? checked : check}
              alt="체크"
              className={styles["img-check"]}
            />
          </div>
        </div>

        <div className={styles["content-display"]}>{renderContent()}</div>

        <div className={`${styles["main-section"]} ${styles["go-input-spec"]}`}>
          <p className={`${styles["main-text"]} ${styles["go-input-spec-text"]}`} onClick={goCheckSpec}>다음</p>
        </div>
      </div>
    </div>
  );
}

export default WelfareInputDisease;
