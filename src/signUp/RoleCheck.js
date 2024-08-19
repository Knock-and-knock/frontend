import React from 'react';
import SignUpHeader from './component/header/SignUpHeader';
import { Link } from 'react-router-dom';

function RoleCheck(props) {
    return (
        <div>
            <SignUpHeader/>
            <div className="signup-container">

            </div>
            <div className="signUpBtn">
                <Link to="/verifyCode" className="backBtn">이전</Link>
                <Link to="/quickLoginSetup" className="nextBtn">다음</Link>
            </div>
        </div>
    );
}

export default RoleCheck;