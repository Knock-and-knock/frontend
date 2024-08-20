import React from 'react';
import "./LoginBtn.css";
import LoginOptionModal from '../modal/LoginOptionModal';

function LoginBtn(props) {
    return (
        <div className="loginBtn-wrap">
            <LoginOptionModal/>
            <button type="submit" className="loginBtn">로그인</button>
        </div>
    );
}

export default LoginBtn;