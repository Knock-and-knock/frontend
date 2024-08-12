import React from 'react';
import './App.css';
import logo from './image/logo.png';

function App() {
  return (
    <div className="container">
      <div className='top-nav'>
        <img src={logo} alt='logo' className='logo-image'/>
      </div>
      <div className="header">
        <div className="profile-info">
          <h2 className="profile-name">홍길동보호자님</h2>
          <p className="profile-subtext">홍길동</p>
        </div>
      </div>

      <div className="main-section">
        <img src="card-icon.svg" alt="이상징후" className="icon" />
        <p className="main-text">000님의 소비 이상징후</p>
      </div>

      <div className="button-group">
        <div className="button">
          <img src="card-icon.svg" alt="소비내역" className="icon" />
          <p className="button-text">소비내역</p>
        </div>
        <div className="button">
          <img src="card-icon.svg" alt="복지서비스" className="icon" />
          <p className="button-text">복지서비스</p>
        </div>
        <div className="button">
          <img src="card-icon.svg" alt="소비리포트" className="icon" />
          <p className="button-text">소비리포트</p>
        </div>
      </div>

      <div className="card-section">
        <p className="card-text">등록된 카드가 없습니다.</p>
        <a href="#" className="card-link">카드 발급하기</a>
      </div>
    </div>
  );
}

export default App;
