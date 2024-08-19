import React from 'react';
import LoginHeader from './component/header/LoginHeader';
import LoginOptionModal from './component/modal/LoginOptionModal';
import LoginBtn from './component/button/LoginBtn';

function LoginPw(props) {
    return (
        <div>
            <LoginHeader/>
            <div className="login-container"></div>
            <LoginOptionModal/>
            <LoginBtn/>
        </div>
    );
}

export default LoginPw;