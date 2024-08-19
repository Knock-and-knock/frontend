import React from 'react';
import "./LoginBtn.css";

function LoginBtn(props) {
    return (
        <div className="btn-wrap">
            <button type="submit" className="loginBtn">로그인</button>
        </div>
    );
}

export default LoginBtn;