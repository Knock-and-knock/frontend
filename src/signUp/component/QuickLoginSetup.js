import React, { useEffect, useState } from 'react';
import SignUpHeader from './header/SignUpHeader';
import { Link, useNavigate } from 'react-router-dom';
import check from 'image/icon/small-check.svg';
import { useMember } from 'signUp/SignUpMain';
import { call } from 'login/service/ApiService';

function QuickLoginSetup(props) {
    const [isPinChecked, setIsPinChecked] = useState(false);
    const [isBioChecked, setIsBioChecked] = useState(false);
    const { userInfo, setUserInfo } = useMember();
    const navi = useNavigate();

    useEffect(() => {
        if (userInfo.userSimplePassword) {
            setIsPinChecked(true);
        } else {
            setIsPinChecked(false);
        }
    }, [userInfo.userSimplePassword]);

    useEffect(() => {
        setUserInfo(prevState => ({
            ...prevState,
            isBioLogin: isBioChecked
        }));
        console.log(isBioChecked);
    }, [isBioChecked]);

    // 생체 인증을 처리하는 함수
    const handleBiometricAuth = async () => {
        if (!navigator.credentials) {
            console.error('This browser does not support the Web Authentication API');
            return;
        }
    
        try {
            const publicKey = {
                challenge: window.crypto.getRandomValues(new Uint8Array(32)),
                // 다른 설정들...
            };
            const credential = await navigator.credentials.create({ publicKey });
            console.log('Biometric authentication successful:', credential);
            setIsBioChecked(true);
        } catch (error) {
            console.error('Biometric authentication failed:', error);
            setIsBioChecked(false);
        }
    };
    

    const handleSubmit = () => {
        call('/api/v1/users/signup', "POST", userInfo).then((response) => {
            localStorage.setItem("bioPW", response.userBioPassword);
            navi("/signup/signupsuccess");
        }).catch((error) => {
            alert("Registration failed. Please try again.");
            navi("/signup/register");
        });
    };

    return (
        <div>
            <SignUpHeader/>
            <div className="signup-container">
                <div className='signup-quickLogin'>
                    <p className='quickLogin-title'>간편 비밀번호</p>
                    <div className='quickLogin-content' onClick={handleBiometricAuth}> {/* 생체 인증 함수 호출 */}
                        <p>비밀번호 6자리로 로그인 합니다</p>
                        <div className='icon-check'>
                            <img src={check} alt="간편로그인설정" className="check" />
                            <div 
                                className={`icon-circle ${isPinChecked ? 'checked' : ''}`} 
                            />
                        </div>
                    </div>
                </div>
                <div className='signup-quickLogin'>
                    <p className='quickLogin-title'>생체 인증</p>
                    <div className='quickLogin-content' onClick={handleBiometricAuth}> {/* 생체 인증 함수 호출 */}
                        <p>등록된 지문으로 로그인 합니다</p>
                        <div className='icon-check'>
                            <img src={check} alt="간편로그인설정" className="check" />
                            <div 
                                className={`icon-circle ${isBioChecked ? 'checked' : ''}`} 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="signUpBtn">
                <Link to="../rolecheck" className="signup-backBtn">이전</Link>
                <button className="signup-nextBtn" onClick={handleSubmit}>저장</button>
            </div>
        </div>
    );
}

export default QuickLoginSetup;
