import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUpHeader from './header/SignUpHeader';
import { useMember } from '../SignUpMain';
import { call } from 'login/service/ApiService';

function Register(props) {
    const {userInfo, handlechange} =useMember();
    const [isNextEnabled, setIsNextEnabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [userIdError, setUserIdError] = useState(false);
    const navi = useNavigate();

    useEffect(() => {
        const { userId, userPassword, userPwCheck } = userInfo;
        const isValid = userId && userPassword && userPassword === userPwCheck && userId.length >= 4 && userId.length <= 16 && userPassword.length >= 8 && userPwCheck.length <= 16;
        setIsNextEnabled(isValid);
    }, [userInfo]);

    const handleSubmit =(e)=>{
        !isNextEnabled && e.preventDefault();
        call(`/api/v1/users/validation/${userInfo.userId}`,"GET",null).then(
            (response)=>{
                if(response.result === true){
                    navi("/signup/infoinput");
                }else{
                    setErrorMessage(response.message);
                    setUserIdError(true);
                }
            }
        ).catch();
    };

    return (
        <div>
            <SignUpHeader/>
          
                <div className="signup-container">
                    <input onChange={handlechange} className={`signup-input ${userIdError ? 'signup-input-error' : ''}`} type="text" name="userId" value={userInfo.userId} placeholder="아이디(4 ~ 16자리 이내)" />
                    <div className={'check-input'}>{errorMessage}</div>
                    <input onChange={handlechange} className="signup-input" type="password" name="userPassword" value={userInfo.userPassword} placeholder="비밀번호(8 ~ 16자리 이내)" />
                    <div className='check-input check-userpw'></div>
                    <input onChange={handlechange} className="signup-input" type="password" name="userPwCheck" value={userInfo.userPwCheck} placeholder="비밀번호 확인" />
                    <div className='check-input check-userpwCheck'></div>
                </div>
                <div className="signUpBtn">
                    <Link to="/loginid" className="signup-backBtn">이전</Link>
                    <button className={`signup-nextBtn ${isNextEnabled ? '' : 'disabled'}`}
                      onClick={handleSubmit}>다음</button>
                </div>
             
           
        </div>
    );
}

export default Register;