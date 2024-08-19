import React, { useState } from 'react';
import 'welfare/css/WelfareInputDisease.css'
import back from 'image/Back.png';
import home from "image/gohome.png";
import check from "image/check.png";
import checked from "image/checked.png";

function WelfareInputDisease() {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const getStyle = (id) => {
    return {
      borderColor: selectedId === id ? '#80BAFF' : ''
    };
  };

  const renderContent = () => {
    switch (selectedId) {
      case 'yes-disease':
        return <div id='disease-list-container'>
          <div className='disease-list-section1'>
            <p className='disease-list-button'>뇌졸중</p>
            <p className='disease-list-button'>심근경색</p>
            <p className='disease-list-button'>고혈압</p>
          </div>
          <div className='disease-list-section2'>
            <p className='disease-list-button'>당뇨병</p>
            <p className='disease-list-button'>이상지질 혈증</p>
            <p className='disease-list-button'>폐 결핵</p>
          </div>

          <p id='info-guitar'>기타</p>
          <input id='input-guitar' placeholder="기타질환을 입력 해주세요"></input>

        </div>

    default:
      return null;  
  }
    
  }

    return (
    <div className="container">
        <div className="header">
        <div className="header-info">
          <img src={back} alt="뒤로가기" className="back-icon" />
          <p className="header-name">복지 서비스 예약하기</p>
          <img src={home} alt="홈 가기" className="home-icon" />
        </div>
      </div>

      <div className="main-container">
        <div id="infomation-container">
            <p className="infomation">가지고 계신</p>
            <p className="infomation">질환이 있나요?</p>
        </div>

      
      <div id="disease-container">
        <div 
        id='input-no-disease' 
        style={getStyle('no-disease')}
        onClick={() => handleClick('no-disease')}
      >
        <button className='disease-section'>기저질환이 없어요</button>
        <img 
          src={selectedId === 'no-disease' ? checked : check} 
          alt='체크' 
          className='img-check'
        />
      </div>

      <div 
        id='input-yes-disease' 
        style={getStyle('yes-disease')}
        onClick={() => handleClick('yes-disease')}
      >
        <button className='disease-section'>기저질환이 있어요</button>
        <img 
          src={selectedId === 'yes-disease' ? checked : check} 
          alt='체크' 
          className='img-check'
        />
      </div>
          
      </div>

      {/* 클릭된 요소에 따라 다른 콘텐츠 렌더링 */}
      <div className="content-display">
          {renderContent()}
      </div>

        <div className="main-section" id="go-input-spec">
          <p className="main-text" id="go-input-spec-text">다음</p>
        </div>


        
      </div>
    </div>
    );
}

export default WelfareInputDisease;