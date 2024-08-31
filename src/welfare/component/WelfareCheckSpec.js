import React, { useEffect } from 'react';
import styles from 'welfare/css/WelfareCheckSpec.module.css'; // CSS 모듈 import
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header.js';
import { useSpecHook } from 'welfare/component/WelfareInputTotal';
import { call } from 'login/service/ApiService';

function WelfareCheckSpec() {
    const navigate = useNavigate();

    const { userSpec } = useSpecHook();

    const formattedReservationInfo = () => {
        if (!userSpec.welfarebookStartdate || !userSpec.welfarebookDurationText) return '정보 없음';
        return `${userSpec.welfarebookStartdate} | ${userSpec.welfarebookDurationText}`;
    };

    useEffect(()=> {
        console.log("Updated userSpec:", userSpec); // 최신 상태의 userSpec 로그 출력
    },[]);

    const goSetPW = () => {
        call('/api/v1/welfare-book/reserve', 'POST', userSpec).then((response)=>{
            navigate('/welfare-set-pw');
        }).catch((error)=>{
            alert("예약 실패");
        });
       
    }

    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줍니다.
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const formatGender = (gender) => {
        if (gender === 1) {
            return "남성";
        } else {
            return "여성";
        }
    };

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles["main-container"]}>
                <div className={styles["infomation-container"]}>
                    <p className={styles.infomation}>입력하신 정보가</p>
                    <p className={styles.infomation}>맞는지 확인 해주세요</p>
                </div>

                <div className={styles["spec-container"]}>
                    <p className={styles["spec-info"]}>이름</p>
                    <input className={styles["spec-check"]} type="text" placeholder="이름" value={userSpec.protegeUserName || ''} disabled />

                    <p className={styles["spec-info"]}>생년월일</p>
                    <input className={styles["spec-check"]} type="Date" placeholder="생년월일" value={formatDate(userSpec.userBirth) || ''} disabled />

                    <p className={styles["spec-info"]}>성별</p>
                    <input className={styles["spec-check"]} type="text" placeholder="성별" value={formatGender(userSpec.userGender) || ''} disabled />

                    <p className={styles["spec-info"]}>주소</p>
                    <input className={styles["spec-check"]} type="text" placeholder="주소" value={userSpec.address + " " + userSpec.detailAddress || ''} disabled />

                    {/* <p className={styles["spec-info"]}>연락처</p>
                    <input className={styles["spec-check"]} type="text" placeholder="연락처" value="010-4519-3851" disabled /> */}

                    <p className={styles["spec-info"]}>신체</p>
                    <input className={styles["spec-check-hw"]} type="number" placeholder="키" value={userSpec.userHeight || ''} disabled />
                    <span className={styles.hw}>cm</span>
                    <input className={styles["spec-check-hw"]} type="number" placeholder="몸무게" value={userSpec.userWeight || ''} disabled />
                    <span className={styles.hw}>kg</span>

                    <p className={styles["spec-info"]}>질병</p>
                    <input className={`${styles["spec-check"]} ${styles.disease}`} type="text" placeholder="질병" value={userSpec.userDisease || ''} disabled />
                    
                    <p className={styles["spec-info"]}>예약 정보</p>
                    <input className={`${styles["spec-check"]} ${styles.last}`} type="text" placeholder="예약 정보" value={formattedReservationInfo()} disabled />
                </div>

                <div className={`${styles["main-section"]} ${styles["go-password"]}`} onClick={goSetPW}>
                    <p className={`${styles["main-text"]} ${styles["go-password-text"]}`}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareCheckSpec;
