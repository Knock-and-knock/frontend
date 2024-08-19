import React from 'react';
import LoginOptionModal from './component/modal/LoginOptionModal';
import LoginBtn from './component/button/LoginBtn';
import LoginHeader from './component/header/LoginHeader';


function LoginBio(props) {
    return (
        <div>
            <LoginHeader/>
            <div className="login-container"></div>
            <LoginOptionModal/>
            <LoginBtn/>
        </div>
    );
}

export default LoginBio;