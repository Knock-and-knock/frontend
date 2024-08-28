import React, { useState, useEffect } from 'react';
import fingerprint from 'image/icon/fingerprint.svg';
import LoginBtn from './component/button/LoginBtn';
import LoginHeader from './component/header/LoginHeader';

function LoginBio(props) {
    const userNo = localStorage.getItem("userNo");
    const bioPW = localStorage.getItem("bioPW");

    const [check, setCheck] = useState(false);  // 인증 결과를 저장하는 상태 변수

    useEffect(() => {
        console.log('인증 상태:', check);  // 상태가 업데이트 될 때마다 콘솔에 출력
    }, [check]);  // check 상태가 변경될 때마다 실행

    // 지문 인증을 처리하는 함수
    const handleBiometricAuth = async () => {
        try {
            const publicKey = {
                challenge: window.crypto.getRandomValues(new Uint8Array(32)),
                rp: { name: "example.com" },
                user: {
                    id: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
                    name: "user@example.com",
                    displayName: "User Example"
                },
                pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
                authenticatorSelection: {
                    authenticatorAttachment: 'platform', // 내장 인증기 사용
                    userVerification: 'required'
                },
                timeout: 60000,
                attestation: 'direct'
            };
    
            const credential = await navigator.credentials.create({ publicKey });
            console.log('지문 인증 성공:', credential);
            setCheck(true);
            return true;
        } catch (error) {
            console.error('지문 인증 실패:', error);
            setCheck(false);
            return false;
        }
    };

    return (
        <div>
            <LoginHeader/>
            <div className="login-container">
                <div className='icon-bio'>
                    <div className='circle'/>
                    <img 
                        src={fingerprint} 
                        alt="생체인증로그인" 
                        className="fingerprint" 
                        onClick={handleBiometricAuth} // 이미지 클릭 시 지문 인증 실행
                    />
                </div>
            </div>
            <LoginBtn/>
        </div>
    );
}

export default LoginBio;
