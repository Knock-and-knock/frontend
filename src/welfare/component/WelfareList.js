import React from 'react';
import styles from 'welfare/css/WelfareList.module.css';
import moonhwaro from "image/moonhwaro.png";
import education from "image/education.png";
import job from "image/job.png";
import bokjiro from "image/bokjiro.png";
import { useNavigate } from 'react-router-dom';
import Header from 'header/BlueHeader';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide01 from "image/slide01.png";
import slide02 from "image/slide02.png";
import slide03 from "image/slide03.png";

function WelfareList() {
    const navigate = useNavigate();

    const goDolbomMain = () => {
        navigate('/welfare-input/dolbom-main');
    }


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

        <Header />

            <div className={styles["main-container"]}>
            {/* <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='slide-container'>
                    
                <SwiperSlide><img src={slide01} alt="복지슬라이드01" className="slide" /></SwiperSlide>
                <SwiperSlide><img src={slide02} alt="복지슬라이드02" className="slide" /></SwiperSlide>
                <SwiperSlide><img src={slide03} alt="복지슬라이드03" className="slide" /></SwiperSlide>
            </Swiper> */}
                <div className={`${styles["foryou-section"]} ${styles["detailed-reserve"]}`}>
                    <p className={`${styles["main-text"]} ${styles.foryou}`}>홍길동님을 위한</p>
                    <div className={styles["go-reserve-container"]}>
                        <span className={`${styles["main-text"]} ${styles["foryou-service"]}`}>노인 돌봄 서비스</span>
                    </div>
                    <span className={styles["go-reserve"]} onClick={goDolbomMain}>예약하러 가기</span>
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
                        <p className={`${styles["main-text"]} ${styles["welfare-intro"]}`}>복지 정보를 한번에</p>
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