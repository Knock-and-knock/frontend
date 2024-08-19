import React from 'react';
import SignUpHeader from './header/SignUpHeader';
import { Link } from 'react-router-dom';
import yes from 'image/yes.png';
import no from 'image/no.png';

function RoleCheck(props) {
    return (
        <div>
            <SignUpHeader/>
            <div className="signup-container">
                <Link to="../verifyCode" className="backBtn">
                    <img src={yes} alt="보호자동의버튼" className="icon-yes" /> 
                    <p>맞습니다</p>
                </Link>
                <Link to="../quickLoginSetup" className="nextBtn">
                    <img src={no} alt="보호자비동의버튼" className="icon-no" /> 
                    <p>아닙니다</p>
                </Link>
            </div>

        </div>
    );
}

export default RoleCheck;