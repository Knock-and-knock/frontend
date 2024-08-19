import React, { useState } from 'react';
import styles from 'welfare/css/DolbomMain.module.css';
import housework1 from "image/housework.png";
import nursing1 from "image/nursing.png";
import hanwool1 from "image/hanwool.png";
import dolbomi from "image/dolbomi.png";
import Header from 'welfare/component/Header.js';

function DolbomMain() {
  const [selectedId, setSelectedId] = useState('nursing');

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const getStyle = (id) => {
    return {
      backgroundColor: selectedId === id ? '#80BAFF' : '',
      color: selectedId === id ? 'white' : ''
    };
  };

  const renderContent = () => {
    switch (selectedId) {
      case 'nursing':
        return (
          <div className={styles["info-container"]}>
            <img src={nursing1} alt='가정간병' className={styles['img-info']} />
            <img src={dolbomi} alt='똑돌보미' className={styles['img-info']} />
            <p className={styles['info-title']}>가정 간병 돌봄 비용</p>
            <div className={styles['info-price-container']}>
              <span className={styles['info-option']}>3시간 (09:00 ~ 12:00)</span>
              <span className={styles['info-price']}>75,000 원</span>
            </div>
            <div className={styles['info-price-container']}>
              <span className={styles['info-option']}>6시간 (09:00 ~ 15:00)</span>
              <span className={styles['info-price']}>150,000 원</span>
            </div>
            <div className={styles['info-price-container']}>
              <span className={styles['info-option']}>9시간 (09:00 ~ 18:00)</span>
              <span className={styles['info-price']}>225,000 원</span>
            </div>
            <div className={`${styles["main-section"]} ${styles["go-reserve-nursing"]}`}>
              <p className={`${styles["main-text"]} ${styles["go-reserve-nursing-text"]}`}>신청하기</p>
            </div>
          </div>
        );
      case 'housework':
        return (
          <div className={styles["info-container"]}>
            <img src={housework1} alt='일상가사' className={styles['img-info']} />
            <img src={dolbomi} alt='똑돌보미' className={styles['img-info']} />
            <p className={styles['info-title']}>일상 가사 돌봄 비용</p>
            <div className={styles['info-price-container']}>
              <span className={styles['info-option']}>3시간 (09:00 ~ 12:00)</span>
              <span className={styles['info-price']}>75,000 원</span>
            </div>
            <div className={styles['info-price-container']}>
              <span className={styles['info-option']}>6시간 (09:00 ~ 15:00)</span>
              <span className={styles['info-price']}>150,000 원</span>
            </div>
            <div className={styles['info-price-container']}>
              <span className={styles['info-option']}>9시간 (09:00 ~ 18:00)</span>
              <span className={styles['info-price']}>225,000 원</span>
            </div>
            <div className={styles["go-reserve-nursing"]}>
              <p className={styles["go-reserve-nursing-text"]}>신청하기</p>
            </div>
          </div>
        );
      case 'hanwool':
        return (
          <div className={styles["info-container"]}>
            <img src={hanwool1} alt='한울돌봄' className={styles['img-info']} />
            <img src={dolbomi} alt='똑돌보미' className={styles['img-info']} />
            <p className={styles['info-title']}>한울 돌봄 비용</p>
            <p>※ 한울 돌봄은 이용기간 1달을 기준으로 하며</p>
            <p>※ 최대 12개월까지 신청 가능합니다.</p>
            <div className={styles['info-price-container']}>
              <span className={styles['info-option']}>9시간 (09:00 ~ 18:00)</span>
              <span className={styles['info-price']}>1개월 (2,000,000 원)</span>
            </div>
            <div className={styles["go-reserve-nursing"]}>
              <p className={styles["go-reserve-nursing-text"]}>신청하기</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles["container"]}>
      <Header />
      <div className={styles["main-container"]}>
        <div className={styles['main-section-container']}>
          <div 
            className={`${styles["main-section"]} ${styles["hanwool-list"]}`} 
            id="nursing" 
            style={getStyle('nursing')}
            onClick={() => handleClick('nursing')}
          >
            <p className={`${styles["main-text"]} ${styles["hanwool-list-text"]}`}>가정 간병</p>
          </div>
          <div 
            className={`${styles["main-section"]} ${styles["hanwool-list"]}`} 
            id="housework" 
            style={getStyle('housework')}
            onClick={() => handleClick('housework')}
          >
            <p className={`${styles["main-text"]} ${styles["hanwool-list-text"]}`}>일상 가사</p>
          </div>
          <div 
            className={`${styles["main-section"]} ${styles["hanwool-list"]}`} 
            id="hanwool" 
            style={getStyle('hanwool')}
            onClick={() => handleClick('hanwool')}
          >
            <p className={`${styles["main-text"]} ${styles["hanwool-list-text"]}`}>한울 돌봄</p>
          </div>
        </div>
        <div className={styles["content-display"]}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default DolbomMain;
