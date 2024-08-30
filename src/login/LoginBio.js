import React, { useState, useEffect } from 'react';
import fingerprint from 'image/icon/fingerprint.svg';
import LoginBtn from './component/button/LoginBtn';
import LoginHeader from './component/header/LoginHeader';
import { call } from './service/ApiService';
import { Navigate } from 'react-router-dom';

function LoginBio(props) {
    const userNo = localStorage.getItem("userNo");
    const userBioPassword = localStorage.getItem("userBioPassword");

    const [check, setCheck] = useState(false);  // 인증 결과를 저장하는 상태 변수
    const [isBioChecked, setIsBioChecked] = useState(false);
    const [isSecurityKeyChecked, setIsSecurityKeyChecked] = useState(false);
    const [isPasskeyChecked, setIsPasskeyChecked] = useState(false);

    useEffect(() => {
        console.log('인증 상태:', check);  // 상태가 업데이트 될 때마다 콘솔에 출력
    }, [check]);  // check 상태가 변경될 때마다 실행

    useEffect(() => {
        console.log('지문 인증 상태:', isBioChecked);
        console.log('보안 키 인증 상태:', isSecurityKeyChecked);
        console.log('패스키 인증 상태:', isPasskeyChecked);
    }, [isBioChecked, isSecurityKeyChecked, isPasskeyChecked]);

    // 지문 인증을 처리하는 함수
    const handleBiometricAuth = async () => {
        if (!navigator.credentials) {
            console.error('This browser does not support the Web Authentication API');
            return;
        }

        try {
            const publicKey = {
                challenge: window.crypto.getRandomValues(new Uint8Array(32)),
                rp: {
                    name: "Example Corp"
                },
                user: {
                    id: new Uint8Array(16), // 사용자 ID (예: 사용자 ID를 바이트 배열로 변환)
                    name: "user@example.com",
                    displayName: "User Name"
                },
                pubKeyCredParams: [
                    {
                        type: "public-key",
                        alg: -7 // ECDSA with SHA-256
                    }
                ],
                timeout: 60000,
                attestation: "direct"
            };
            const credential = await navigator.credentials.create({ publicKey });
            console.log('지문 인증 성공:', credential);
            console.log("userNo: " + userNo);
            console.log("userBioPassword: " + userBioPassword);
            // const userType = localStorage.setItem("userType", "userType");
            // const ACCESS_TOKEN = localStorage.setItem("ACCESS_TOKEN", "ACCESS_TOKEN");
            setCheck(true);
            setIsBioChecked(true);
            Navigate('/home');
        } catch (error) {
            console.error('Biometric authentication failed:', error);
            console.log("못 보냈어요" + error);
            setCheck(false);
            setIsBioChecked(false);
            return false;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); //default이벤트 취소
        const userNo = localStorage.getItem("userNo");
        const userBioPassword = localStorage.getItem("userBioPassword");
        call("/api/v1/auth/login/bio", "POST", { userNo: userNo, userBioPassword: userBioPassword }).then((response)=>{
           console.log(userNo, userBioPassword);
          }).catch(
            (error)=>{
            console.log("못 보냈어요" + error);
         });

      };

    return (
        <div>
            <LoginHeader/>
            <form noValidate onSubmit={handleSubmit}>
            <div className="login-container">
                <div className='icon-bio'>
                    <div className='circle'/>
                    <img 
                        src={fingerprint} 
                        alt="지문 인증 로그인" 
                        className="fingerprint" 
                        onClick={handleBiometricAuth} // 지문 인증 실행
                    />
                </div>
                
            </div>
            <LoginBtn/>
            </form>
        </div>
    );
}

export default LoginBio;
