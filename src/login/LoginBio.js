import React from 'react';
import LoginOptionModal from './component/modal/LoginOptionModal';
import LoginBtn from './component/button/LoginBtn';
import LoginHeader from './component/header/LoginHeader';
import bio from 'image/icon/bio.png';

function LoginBio(props) {
    return (
        <div>
            <LoginHeader/>
            <div className="login-container">
                <img src={bio} alt="생체인증로그인" className="icon-bio" /> 
            </div>
            <LoginOptionModal/>
            <LoginBtn/>
        </div>
    );
}

export default LoginBio;