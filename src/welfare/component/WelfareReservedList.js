import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfareReservedList.module.css';
import Modal from "react-modal";
import WelfareReserveCancelModal from 'welfare/component/WelfareReserveCancelModal';
import WelfareReservedItem from 'welfare/component/WelfareReservedItem';
import Header from 'header/BlueHeader.js';
import { call } from 'login/service/ApiService';

function WelfareReservedList() {
  const [isOpen, setIsOpen] = useState(false);
  const [reservedItems,setReserveItems] =useState([]);

  useEffect(()=>{
    call('/api/v1/welfare-book',"GET",null).then((response)=>{
      setReserveItems(response);
    }).catch((error)=>{
      alert("복지목록 조회 실패");
    });
  },[]);

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

  const CancelStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    content: {
      height: "250px",
      margin: "auto",
      borderRadius: "15px",
      padding: "20px",
    },
  };

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles["main-container"]}>
        {reservedItems.map((item, index) => (
          <WelfareReservedItem
            key={index}
            title={item.welfareName}
            paymentDate={item.paymentDate}
            reserveDate={item.reserveDate}
            reserveTime={item.reserveTime}
            price={item.welfarePirce}
            onCancel={openModal}
          />
        ))}
      </div>

      <Modal isOpen={isOpen} onRequestClose={closeModal} style={CancelStyles}>
        <WelfareReserveCancelModal closeModal={closeModal} />
      </Modal>
    </div>
  );
}

export default WelfareReservedList;
