import React from 'react';

import { Link } from 'react-router-dom';
import SignUpHeader from './header/SignUpHeader';

function VerifyCode(props) {
    return (
        <div>
            <SignUpHeader/>
            <div className="signup-container">

            </div>
            <div className="signUpBtn">
                <Link to="../infoInput" className="backBtn">이전</Link>
                <Link to="../roleCheck" className="nextBtn">다음</Link>
            </div>
        </div>
    );
}

export default VerifyCode;