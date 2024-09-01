import React, { useEffect, useState } from 'react';
import styles from 'welfare/css/WelfareMain.module.css';
import welfare from "image/welfare.png";
import { useNavigate } from 'react-router-dom';
import Header from 'header/BlueHeader.js';
import { call } from 'login/service/ApiService';

function WelfareMain() {
  // useState를 올바르게 사용하기 위해 배열 구조 분해 할당 사용
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    // 로컬 스토리지에서 "loginUser" 확인하고, API 호출 조건 적용
    const storedUser = localStorage.getItem("loginUser");
    if (storedUser === "PROTECTOR") {
      call("/api/v1/match", "GET", null)
        .then((response) => {
          // 상태 업데이트시 loginUser가 null일 수 있으므로 주의
          setLoginUser(prevUser => ({
            ...prevUser,
            protegeUserName: response.protegeUserName
          }));
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);

  const navigate = useNavigate();

  const goDetailReserved = () => {
    navigate('/welfare-reserved-list');
  }

  const goDolbomMain = () => {
    navigate('/welfare-list');
  }

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles["main-container"]}>
        <p className={styles["info-container"]}>
          <span className={styles["user-name"]}>{loginUser ? `${loginUser.protegeUserName}님` : '사용자님'}</span>
          <span className={styles.for}>을 위한</span>
        </p>
        <p className={styles.infomation}>복지 서비스를</p>
        <p className={styles.infomation}>똑똑에서 찾아보세요</p>
        <img src={welfare} alt="복지" className={styles["img-welfare"]} />
        <div className={`${styles["main-section"]} ${styles["detailed-reserve"]}`} onClick={goDetailReserved}>
          <p className={`${styles["main-text"]} ${styles["detailed-reserve-text"]}`}>예약 내역 보기</p>
        </div>
        <div className={`${styles["main-section"]} ${styles["go-reserve"]}`} onClick={goDolbomMain}>
          <p className={`${styles["main-text"]} ${styles["go-reserve-text"]}`}>예약하러 가기</p>
        </div>
      </div>
    </div>
  );
}

export default WelfareMain;
