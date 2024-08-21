import React, { useEffect } from 'react';
import styles from 'welfare/css/WelfareCheckSpec.module.css'; // CSS 모듈 import
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header.js';
import { useSpecHook } from 'welfare/component/WelfareInputTotal';

function WelfareCheckSpec() {
    const navigate = useNavigate();

    const { userSpec } = useSpecHook();

    useEffect(()=> {
        console.log("Updated userSpec:", userSpec); // 최신 상태의 userSpec 로그 출력
    },[]);

    const goSetPW = () => {
        navigate('/welfare-set-pw');
    }

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
                    <input className={styles["spec-check"]} type="text" placeholder="이름" value="gdgd" disabled />

                    <p className={styles["spec-info"]}>나이</p>
                    <input className={styles["spec-check"]} type="number" placeholder="나이" value={userSpec.age || ''} disabled />

                    <p className={styles["spec-info"]}>성별</p>
                    <input className={styles["spec-check"]} type="text" placeholder="성별" value={userSpec.gender || ''} disabled />

                    <p className={styles["spec-info"]}>주소</p>
                    <input className={styles["spec-check"]} type="text" placeholder="주소" value={userSpec.userAddress + userSpec.userDetailAddress || ''} disabled />

                    <p className={styles["spec-info"]}>연락처</p>
                    <input className={styles["spec-check"]} type="text" placeholder="연락처" value="010-2235-1234" disabled />

                    <p className={styles["spec-info"]}>신체</p>
                    <input className={styles["spec-check-hw"]} type="number" placeholder="키" value={userSpec.height || ''} disabled />
                    <span className={styles.hw}>cm</span>
                    <input className={styles["spec-check-hw"]} type="number" placeholder="몸무게" value={userSpec.weight || ''} disabled />
                    <span className={styles.hw}>kg</span>

                    <p className={styles["spec-info"]}>질병</p>
                    <input className={`${styles["spec-check"]} ${styles.disease}`} type="text" placeholder="질병" value={userSpec.selectedDiseases + "," + userSpec.otherDisease || ''} disabled />
                </div>

                <div className={`${styles["main-section"]} ${styles["go-password"]}`} onClick={goSetPW}>
                    <p className={`${styles["main-text"]} ${styles["go-password-text"]}`}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareCheckSpec;
