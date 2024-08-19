import React, { useState } from 'react';
import 'welfare/css/DolbomMain.css';
import back from "image/Back.png";
import home from "image/gohome.png";
import housework1 from "image/housework.png";
import nursing1 from "image/nursing.png";
import hanwool1 from "image/hanwool.png";
import dolbomi from "image/dolbomi.png";

function DolbomMain() {
  // 선택된 요소를 저장할 상태를 정의함
  // (nursing으로 설정했으므로 처음 페이지 들어가면 nursing이 선택되어있음)
  const [selectedId, setSelectedId] = useState('nursing');

  // 클릭 시 배경색과 글자색을 변경하고, 상태를 업데이트하는 함수
  const handleClick = (id) => {
    setSelectedId(id);
  };

  // 선택된 요소에 스타일 적용
  const getStyle = (id) => {
    return {
      backgroundColor: selectedId === id ? '#80BAFF' : '',
      color: selectedId === id ? 'white' : ''
    };
  };

  // 선택된 요소에 따라 다른 콘텐츠를 렌더링하는 함수
  const renderContent = () => {
    switch (selectedId) {
      case 'nursing':
        return <div className="info-container">
        <img src={nursing1} alt='가정간병' className='img-info'/>
        <img src={dolbomi} alt='똑돌보미' className='img-info'/>
        <p className='info-title'>가정 간병 돌봄 비용</p>
        <div className='info-price-container'>
            <span className='info-option'>3시간 (09:00 ~ 12:00)</span><span className='info-price'>75,000 원</span>
        </div>
        <div className='info-price-container'>
            <span className='info-option'>6시간 (09:00 ~ 15:00)</span><span className='info-price'>150,000 원</span>
        </div>
        <div className='info-price-container'>
            <span className='info-option'>9시간 (09:00 ~ 18:00)</span><span className='info-price'>225,000 원</span>
        </div>
        
        <div className="main-section" id="go-reserve-nursing">
          <p className="main-text" id="go-reserve-nursing-text">신청하기</p>
        </div>

        </div>;

      case 'housework':
        return <div className="info-container">
        <img src={housework1} alt='일상가사' className='img-info'/>
        <img src={dolbomi} alt='똑돌보미' className='img-info'/>
        <p className='info-title'>일상 가사 돌봄 비용</p>
        <div className='info-price-container'>
            <span className='info-option'>3시간 (09:00 ~ 12:00)</span><span className='info-price'>75,000 원</span>
        </div>
        <div className='info-price-container'>
            <span className='info-option'>6시간 (09:00 ~ 15:00)</span><span className='info-price'>150,000 원</span>
        </div>
        <div className='info-price-container'>
            <span className='info-option'>9시간 (09:00 ~ 18:00)</span><span className='info-price'>225,000 원</span>
        </div>
        
        <div className="main-section" id="go-reserve-nursing">
          <p className="main-text" id="go-reserve-nursing-text">신청하기</p>
        </div>

        </div>;

      case 'hanwool':
        return <div className="info-container">
        <img src={hanwool1} alt='한울돌봄' className='img-info'/>
        <img src={dolbomi} alt='똑돌보미' className='img-info'/>
        <p className='info-title'>한울 돌봄 비용</p>
        <p>※ 한울 돌봄은 이용기간 1달을 기준으로 하며</p>
        <p>※ 최대 12개월까지 신청 가능합니다.</p>
        <div className='info-price-container'>
            <span className='info-option'>9시간 (09:00 ~ 18:00)</span><span className='info-price'>1개월 (2,000,000 원)</span>
        </div>
        
        <div className="main-section" id="go-reserve-nursing">
          <p className="main-text" id="go-reserve-nursing-text">신청하기</p>
        </div>

        </div>;
        
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-info">
          <img src={back} alt="뒤로가기" className="back-icon" />
          <p className="header-name">복지 서비스</p>
          <img src={home} alt="홈 가기" className="home-icon" />
        </div>
      </div>

      <div className="main-container">
        <div className='main-section-container'>
          <div 
            className="main-section hanwool-list" 
            id="nursing" 
            style={getStyle('nursing')}
            onClick={() => handleClick('nursing')}
          >
            <p className="main-text hanwool-list-text">가정 간병</p>
          </div>
          <div 
            className="main-section hanwool-list" 
            id="housework" 
            style={getStyle('housework')}
            onClick={() => handleClick('housework')}
          >
            <p className="main-text hanwool-list-text">일상 가사</p>
          </div>
          <div 
            className="main-section hanwool-list" 
            id="hanwool" 
            style={getStyle('hanwool')}
            onClick={() => handleClick('hanwool')}
          >
            <p className="main-text hanwool-list-text">한울 돌봄</p>
          </div>
        </div>

        {/* 클릭된 요소에 따라 다른 콘텐츠 렌더링 */}
        <div className="content-display">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default DolbomMain;
