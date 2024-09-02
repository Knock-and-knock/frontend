import Header from 'header/Header.js';
import dolbomi from "image/dolbomi.png";
import hanwool1 from "image/hanwool1.png";
import hanwool2 from "image/hanwool_2.png";
import housework1 from "image/housework1.png";
import housework2 from "image/housework_3.png";
import nursing1 from "image/nursing1.png";
import nursing2 from "image/nursing_3.png";
import { call } from 'login/service/ApiService';
import { useEffect, useState } from 'react';
import Modal from "react-modal";
import WelfareHanwoolModal from 'welfare/component/WelfareHanwoolModal';
import WelfareHouseworkModal from 'welfare/component/WelfareHouseworkModal';
import WelfareNursingModal from 'welfare/component/WelfareNursingModal';
import styles from 'welfare/css/DolbomMain.module.css';

Modal.setAppElement('#root');

function DolbomMain() {
  const [selectedId, setSelectedId] = useState('nursing');
  const [isOpen, setIsOpen] = useState(false);
  const [cardIsIt, setCardIsIt] = useState(false);//이거변경

  useEffect(() => {
    call("/api/v1/cardIsIt", "GET", null)//주소변경
      .then((response) => {
        setCardIsIt(response);//ㅇ거변경
      })
      .catch((error) => {
        console.error("Error fetching card status:", error);
      });
  }, []);

  useEffect(() => {
    if (isOpen) {
      // 모달이 열렸을 때 body의 스크롤을 막음
      document.body.style.overflow = 'hidden';
    } else {
      // 모달이 닫혔을 때 body의 스크롤을 허용
      document.body.style.overflow = 'auto';
    }

    // 컴포넌트가 언마운트 될 때 스크롤을 다시 허용
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const ReserveStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: "2"
    },
    content: {
      position: "fixed",
      top: "40%",
      bottom: "0",
      left: "0",
      right: "0",
      height: "auto",
      width: "100%",
      borderRadius: "15px 15px 0 0",
      padding: "25px 25px 0px 25px",
      boxSizing: "border-box",
    },
  };

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const renderModalContent = () => {
    switch (selectedId) {
      case 'nursing':
        return <WelfareNursingModal closeModal={closeModal} />;
      case 'housework':
        return <WelfareHouseworkModal closeModal={closeModal} />;
      case 'hanwool':
        return <WelfareHanwoolModal closeModal={closeModal} />;
      default:
        return null;
    }
  };

  const renderButtonText = () => {
    return cardIsIt ? '신청하기' : '카드를 신청하고 이용해주세요';
  };

  const renderContent = () => {
    switch (selectedId) {
      case 'nursing':
        return (
          <div className={styles["info-container"]}>
            <img src={nursing1} alt='가정간병1' className={styles['img-info']} />
            <img src={dolbomi} alt='똑돌보미' className={styles['img-info']} />
            <img src={nursing2} alt='가정간병2' className={styles['img-info']} />
            
            <div 
              className={`${styles["button-section"]} ${styles["go-reserve-nursing"]}`} 
              onClick={cardIsIt ? openModal : null}
              style={{ cursor: cardIsIt ? 'pointer' : 'not-allowed', opacity: cardIsIt ? 1 : 0.5 }}
            >
              <p className={`${styles["main-text"]} ${styles["go-reserve-nursing-text"]}`}>{renderButtonText()}</p>
            </div>
          </div>
        );
      case 'housework':
        return (
          <div className={styles["info-container"]}>
            <img src={housework1} alt='일상가사1' className={styles['img-info']} />
            <img src={dolbomi} alt='똑돌보미' className={styles['img-info']} />
            <img src={housework2} alt='일상가사2' className={styles['img-info']} />

            <div 
              className={`${styles["button-section"]} ${styles["go-reserve-nursing"]}`} 
              onClick={cardIsIt ? openModal : null}
              style={{ cursor: cardIsIt ? 'pointer' : 'not-allowed', opacity: cardIsIt ? 1 : 0.5 }}
            >
              <p className={`${styles["main-text"]} ${styles["go-reserve-nursing-text"]}`}>{renderButtonText()}</p>
            </div>
          </div>
        );
      case 'hanwool':
        return (
          <div className={styles["info-container"]}>
            <img src={hanwool1} alt='한울돌봄1' className={styles['img-info']} />
            <img src={dolbomi} alt='똑돌보미' className={styles['img-info']} />
            <img src={hanwool2} alt='한울돌봄2' className={styles['img-info']} />

            <div 
              className={`${styles["button-section"]} ${styles["go-reserve-nursing"]}`} 
              onClick={cardIsIt ? openModal : null}
              style={{ cursor: cardIsIt ? 'pointer' : 'not-allowed', opacity: cardIsIt ? 1 : 0.5 }}
            >
              <p className={`${styles["main-text"]} ${styles["go-reserve-nursing-text"]}`}>{renderButtonText()}</p>
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
          style={{ backgroundColor: selectedId === 'nursing' ? '#80BAFF' : '', border: selectedId === 'nursing' ? '3px solid #80BAFF' : ''  }}
          onClick={() => handleClick('nursing')}
        >
          {/* 글자 색상은 p 태그에만 적용 */}
          <p 
            className={`${styles["main-text"]} ${styles["nursing-list-text"]}`} 
            style={{ color: selectedId === 'nursing' ? 'white' : '#686868' }}
            id='nursing'
          >
            가정 간병
          </p>
        </div>

        <div 
          className={`${styles["main-section"]} ${styles["hanwool-list"]}`} 
          id="housework" 
          style={{ backgroundColor: selectedId === 'housework' ? '#80BAFF' : '', border: selectedId === 'housework' ? '3px solid #80BAFF' : ''   }}
          onClick={() => handleClick('housework')}
        >
          <p 
            className={`${styles["main-text"]} ${styles["housework-list-text"]}`} 
            style={{ color: selectedId === 'housework' ? 'white' : '#686868' }}
            id='housework'
          >
            일상 가사
          </p>
        </div>

        <div 
          className={`${styles["main-section"]} ${styles["hanwool-list"]}`} 
          id="hanwool" 
          style={{ backgroundColor: selectedId === 'hanwool' ? '#80BAFF' : '', border: selectedId === 'hanwool' ? '3px solid #80BAFF' : ''   }}
          onClick={() => handleClick('hanwool')}
        >
          <p 
            className={`${styles["main-text"]} ${styles["hanwool-list-text"]}`} 
            style={{ color: selectedId === 'hanwool' ? 'white' : '#686868' }}
            id='hanwool'
          >
            한울 돌봄
          </p>
        </div>
        </div>
        <div className={styles["content-display"]}>
          {renderContent()}
        </div>
      </div>
      
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={ReserveStyles}>
        {renderModalContent()}
      </Modal>
    </div>
  );
}

export default DolbomMain;
