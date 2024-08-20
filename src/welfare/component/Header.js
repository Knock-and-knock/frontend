import React from 'react';
import 'welfare/css/Header.css'
import { useLocation, useNavigate } from 'react-router-dom';
import back from "image/Back.png";
import home from "image/gohome.png";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    // 경로에 따라 제목을 설정하는 함수 (수정하기)
    const getTitle = (pathname) => {
        switch (pathname) {
            case '/DolbomMain':
                return '복지 서비스 예약하기';
            case '/WelfareReservedList':
                return '예약된 복지 서비스';
            // => 추가 경로에 따라 제목 설정
            default:
                return null;
        }
    };
    
 
    return (
        <header>
            <div className='header-wrap'>
            <div className="header">
                <div className="header-info">
                    <img src={back} alt="뒤로가기" className="back-icon" />
                    <p className="header-name">{getTitle(location.pathname)}</p>
                    <img src={home} alt="홈 가기" className="home-icon" />
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;