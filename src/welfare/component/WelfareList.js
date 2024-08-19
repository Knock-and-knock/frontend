import React from 'react';
import 'welfare/css/WelfareList.css';
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

    return (
        <div className="container">

      <div className="header">
        <div className="header-info">
          <img src={back} alt="뒤로가기" className="back-icon" />
          <p className="header-name">예약된 복지 서비스</p>
          <img src={home} alt="홈 가기" className="home-icon" />
        </div>
      </div>

      <div className="main-container">
        <div className="foryou-section" id="detailed-reserve">
          <p className="main-text" id="foryou">홍길동님을 위한</p>
          <div id="go-reserve-container"><span className="main-text" id="foryou-service">노인 돌봄 서비스</span></div>
          <span className="main-text" id="go-reserve">예약하러 가기</span>
        </div>

        <div className='main-section-container'>
            
        <div className="main-section detailed-welfare" onClick={() => goCulture('culture')}>
          <p className="main-text welfare-intro">혼자, 함께하는</p>
          <div className="welfare-title-container">
            <p className="main-text welfare-title1">문화 프로그램</p>
            <p className="main-text welfare-title2">찾아보기</p>
          </div>
          <hr></hr>
          <img src={moonhwaro} alt="문화로 청춘" />
        </div>

        <div className="main-section detailed-welfare">
          <p className="main-text welfare-intro">자격증 취득 가능한</p>
          <div className="welfare-title-container">
            <p className="main-text welfare-title1">교육 프로그램</p>
            <p className="main-text welfare-title2">찾아보기</p>
          </div>
          <hr></hr>
          <img src={education} alt="교육" />
        </div>
        
        </div>

        <div className='main-section-container'>
            
        <div className="main-section detailed-welfare" onClick={() => goJob('job')}>
          <p className="main-text welfare-intro">나만의 맞춤형</p>
          <div className="welfare-title-container">
            <p className="main-text welfare-title1">일자리</p>
            <p className="main-text welfare-title2">찾아보기</p>
          </div>
          <hr></hr>
          <img src={job} alt="일자리" />
        </div>

        <div className="main-section detailed-welfare" onClick={() => goBokjiro('bokjiro')}>
          <p className="main-text welfare-intro">복지 정보를 한 곳에</p>
          <div className="welfare-title-container">
            <p className="main-text welfare-title1">복지로</p>
            <p className="main-text welfare-title2">바로가기</p>
          </div>
          <hr></hr>
          <img src={bokjiro} alt="복지로" />
        </div>

        </div>

      </div>

    </div>
    );
}

export default WelfareList;