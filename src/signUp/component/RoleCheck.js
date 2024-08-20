import React, { useState } from 'react';
import SignUpHeader from './header/SignUpHeader';
import { Link } from 'react-router-dom';
import yes from 'image/yes.png';
import no from 'image/no.png';
import { useMember } from 'signUp/SignUpMain';

function RoleCheck(props) {
    const [role, setRole] = useState('');
    const {handlechange} =useMember();

    const handleAgreeClick = () => {
        setRole('PROTECTOR')
        handlechange({ target: { value: 'PROTECTOR', name: 'userType' } });
    };
    const handleDisagreeClick = () => {
        setRole('PROTEGE');
        handlechange({ target: { value: 'PROTECTOR', name: 'userType' } });

    };
    return (
        <div>
            <SignUpHeader/>
            <div className="signup-container">
                <div className='signup-rolecheck'>
                    <div className={`signup-role ${role === 'PROTECTOR' ? 'selected-role' : ''}`} onClick={handleAgreeClick}>
                        <img src={yes} alt="보호자동의버튼" className="icon-yes" />
                        <p>맞습니다</p>
                    </div>
                    <div className={`signup-role ${role === 'PROTEGE' ? 'selected-role' : ''}`} onClick={handleDisagreeClick}>
                        <img src={no} alt="보호자비동의버튼" className="icon-no" />
                        <p>아닙니다</p>
                    </div>
                </div>
            </div>

            <input type="hidden" value={role} onChange={handlechange} name='userType'/>
            <div className="signUpBtn">
                <Link to="../verifycode" className="signup-backBtn">이전</Link>
                <Link to="../quickloginsetup" className="signup-nextBtn">다음</Link>
            </div>
        </div>
    );
}

export default RoleCheck;