import React from 'react';
import SignUpHeader from './component/header/SignUpHeader';
import { Link } from 'react-router-dom';

function InfoInput(props) {
    return (
        <div>
            <SignUpHeader/>
            <div className="signup-container">
                <input className="login-input" type="text" placeholder="이름"/>
                <input className="login-input" type="text" placeholder="전화번호"/> 
            </div>
            <div className="signUpBtn">
                <Link to="/signUp" className="backBtn">이전</Link>
                <Link to="/verifyCode" className="nextBtn">다음</Link>
            </div>
        </div>
    );
}

export default InfoInput;