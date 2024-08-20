import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpHeader from './header/SignUpHeader';
import { useMember } from '../SignUpMain';

function Register(props) {
    const {userInfo, handlechange} =useMember();
    const [isNextEnabled, setIsNextEnabled] = useState(false);

    useEffect(() => {
        const { userId, userPassword, userPwCheck } = userInfo;
        const isValid = userId && userPassword && userPassword === userPwCheck && userId.length >= 4 && userId.length <= 16 && userPassword.length >= 8 && userPwCheck.length <= 16;
        setIsNextEnabled(isValid);
    }, [userInfo]);

 

    return (
        <div>
            <SignUpHeader/>
          
                <div className="signup-container">
                    <input onChange={handlechange} className="signup-input" type="text" name="userId" placeholder="아이디(4 ~ 16자리 이내)" />
                    <div className='check-input check-userid'></div>
                    <input onChange={handlechange} className="signup-input" type="text" name="userPassword" placeholder="비밀번호(8 ~ 16자리 이내)" />
                    <div className='check-input check-userpw'></div>
                    <input onChange={handlechange} className="signup-input" type="text" name="userPwCheck" placeholder="비밀번호 확인" />
                    <div className='check-input check-userpwCheck'></div>
                </div>
                <div className="signUpBtn">
                    <Link to="/loginid" className="signup-backBtn">이전</Link>
                    <Link to="/signup/infoinput" className={`signup-nextBtn ${isNextEnabled ? '' : 'disabled'}`}
                      onClick={(e) => !isNextEnabled && e.preventDefault()}>다음</Link>
                </div>
             
           
        </div>
    );
}

export default Register;