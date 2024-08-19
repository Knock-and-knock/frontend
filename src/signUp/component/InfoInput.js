import React, { useState } from 'react';
import SignUpHeader from './header/SignUpHeader';
import { Link } from 'react-router-dom';
import { useMember } from '../SignUpMain';

function InfoInput(props) {
    const {handlechange} =useMember();
    const formatPhoneNumber = (value) => {
        return value
            .replace(/[^0-9]/g, '')  // 숫자만 남기기
            .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`); // 하이픈 추가
    };
    const handlePhoneChange = (event) => {
        const { name, value } = event.target;
        if (name === 'userphone') {
            event.target.value = formatPhoneNumber(value);
        }
        handlechange(event); // 원래의 handleChange 함수 호출
    };
    return (
        <div>
            <SignUpHeader/>
            <div className="signup-container">
                <input onChange={handlechange} className="login-input" type="text" name='username' placeholder="이름"/>
                <input onChange={handlePhoneChange} className="login-input" type="tel" name='userphone' placeholder="전화번호" maxLength={13}/> 
            </div>
            <div className="signUpBtn">
                <Link to="../register" className="backBtn">이전</Link>
                <Link to="../verifyCode" className="nextBtn">다음</Link>
            </div>
        </div>
    );
}

export default InfoInput;