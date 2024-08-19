import React from 'react';
import styles from 'welfare/css/WelfareList.module.css'; // CSS 모듈 import
import back from "image/Back.png";
import home from "image/gohome.png";
import moonhwaro from "image/moonhwaro.png";
import education from "image/education.png";
import job from "image/job.png";
import bokjiro from "image/bokjiro.png";

function WelfareList() {
    const goBokjiro = (id) => {
      if(id === 'bokjiro') {
        window.location.href = "https://www.bokjiro.go.kr/ssis-tbu/index.do";
      }
    }

    const goJob = (id) => {
      if(id === 'job') {
        window.location.href = "https://www.seniorro.or.kr:4431/noin/main.do";
      }
    }

    const goCulture = (id) => {
      if(id === 'culture') {
        window.location.href = "https://senior.kccf.or.kr/";
      }
    }

    const goEdu = (id) => {
      if(id === 'education') {
        window.location.href = "https://k-lifelongedu.co.kr/";
      }
    }

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <div className={styles["header-info"]}>
                    <img src={back} alt="뒤로가기" className={styles["back-icon"]} />
                    <p className={styles["header-name"]}>예약된 복지 서비스</p>
                    <img src={home} alt="홈 가기" className={styles["home-icon"]} />
                </div>
            </div>

            <div className={styles["main-container"]}>
                <div className={`${styles["foryou-section"]} ${styles["detailed-reserve"]}`}>
                    <p className={`${styles["main-text"]} ${styles.foryou}`}>홍길동님을 위한</p>
                    <div className={styles["go-reserve-container"]}>
                        <span className={`${styles["main-text"]} ${styles["foryou-service"]}`}>노인 돌봄 서비스</span>
                    </div>
                    <span className={styles["go-reserve"]}>예약하러 가기</span>
                </div>

                <div className={styles["main-section-container"]}>
                    <div className={`${styles["main-section"]} ${styles["detailed-welfare"]}`} onClick={() => goCulture('culture')}>
                        <p className={`${styles["main-text"]} ${styles["welfare-intro"]}`}>혼자, 함께하는</p>
                        <div className={styles["welfare-title-container"]}>
                            <p className={`${styles["main-text"]} ${styles["welfare-title1"]}`}>문화 프로그램</p>
                            <p className={`${styles["main-text"]} ${styles["welfare-title2"]}`}>찾아보기</p>
                        </div>
                        <hr />
                        <img src={moonhwaro} alt="문화로 청춘" />
                    </div>

                    <div className={`${styles["main-section"]} ${styles["detailed-welfare"]}`}  onClick={() => goEdu('education')} >
                        <p className={`${styles["main-text"]} ${styles["welfare-intro"]}`}>자격증 취득 가능한</p>
                        <div className={styles["welfare-title-container"]}>
                            <p className={`${styles["main-text"]} ${styles["welfare-title1"]}`}>교육 프로그램</p>
                            <p className={`${styles["main-text"]} ${styles["welfare-title2"]}`}>찾아보기</p>
                        </div>
                        <hr />
                        <img src={education} alt="교육" />
                    </div>
                </div>

                <div className={styles["main-section-container"]}>
                    <div className={`${styles["main-section"]} ${styles["detailed-welfare"]}`} onClick={() => goJob('job')}>
                        <p className={`${styles["main-text"]} ${styles["welfare-intro"]}`}>나만의 맞춤형</p>
                        <div className={styles["welfare-title-container"]}>
                            <p className={`${styles["main-text"]} ${styles["welfare-title1"]}`}>일자리</p>
                            <p className={`${styles["main-text"]} ${styles["welfare-title2"]}`}>찾아보기</p>
                        </div>
                        <hr />
                        <img src={job} alt="일자리" />
                    </div>

                    <div className={`${styles["main-section"]} ${styles["detailed-welfare"]}`} onClick={() => goBokjiro('bokjiro')}>
                        <p className={`${styles["main-text"]} ${styles["welfare-intro"]}`}>복지 정보를 한 곳에</p>
                        <div className={styles["welfare-title-container"]}>
                            <p className={`${styles["main-text"]} ${styles["welfare-title1"]}`}>복지로</p>
                            <p className={`${styles["main-text"]} ${styles["welfare-title2"]}`}>바로가기</p>
                        </div>
                        <hr />
                        <img src={bokjiro} alt="복지로" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelfareList;
