import React, { useState, useRef } from 'react';
import 'welfare/css/WelfareSetPW.css';
import back from 'image/Back.png';
import home from "image/gohome.png";
import graycircle from "image/graycircle.png";
import bluecircle from "image/bluecircle.png";

function WelfareSetPW() {
    const [password, setPassword] = useState("");
    const inputRef = useRef(null);

    const handleCircleClick = () => {
        // 이미지 클릭 시 숨겨진 input에 포커스를 줌
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const value = e.target.value;
        // 입력된 값이 6자리 이하일 때만 업데이트
        if (value.length <= 6) {
            const value = e.target.value.slice(0, 6);
            setPassword(value);
        }
    };

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
                <div id="pay-container">
                    <p className="infomation">결제 시 사용하실</p>
                    <p className="infomation">비밀번호 6자리를 설정해 주세요</p>
                </div>

                <div id="password-container">
                    <div id='password-section' onClick={handleCircleClick}>
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <img
                                key={index}
                                id={`circle${index}`}
                                src={password.length >= index ? bluecircle : graycircle}
                                alt={password.length >= index ? '파란색' : '회색'}
                            />
                        ))}
                    </div>
                </div>

                {/* 숨겨진 input 요소 */}
                <input
                    ref={inputRef}
                    type="number"
                    value={password}
                    onChange={handleChange}
                    className="hidden-input"
                    style={{ 
                        opacity: 0, 
                        position: 'absolute', 
                        zIndex: -1 
                    }}
                />

                <div className="main-section" id="go-pay">
                    <p className="main-text" id="go-pay-text">다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareSetPW;
