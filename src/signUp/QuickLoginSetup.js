import React from 'react';
import SignUpHeader from './component/header/SignUpHeader';
import { Link } from 'react-router-dom';

function QuickLoginSetup(props) {
    return (
        <div>
            <SignUpHeader/>
            <div className="signup-container">
                <div>
                    <p>간편비밀번호</p>
                    <p>비밀번호 6자리로 로그인 합니다</p>
                </div>
                <div>
                    <p>생체인증</p>
                    <p>등록된 지문으로 로그인 합니다 </p>
                </div>
                </div>
            <div className="signUpBtn">
                <Link to="/signUpSuccess" className="backBtn">건너뛰기</Link>
                <Link to="/pinSetup" className="nextBtn">설정</Link>
            </div>
        </div>
    );
}

export default QuickLoginSetup; 