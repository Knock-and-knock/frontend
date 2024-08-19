import React from 'react';
import { Link } from 'react-router-dom';
import SignUpHeader from './header/SignUpHeader';
import { useMember } from '../SignUpMain';

function Register(props) {
    const {userInfo, setUserInfo, handlechange} =useMember();
    return (
        <div>
            <SignUpHeader/>
          
                <div className="signup-container">
                    <input onChange={handlechange} className="signup-input" type="text" name="useid" placeholder="아이디(4 ~ 16자리 이내)"/>
                    <input onChange={handlechange} className="signup-input" type="text" name="userpw" placeholder="비밀번호(8 ~ 16자리 이내"/>
                    <input onChange={handlechange} className="signup-input" type="text" name="userpwCheck" placeholder="비밀번호 확인"/>
                </div>
                <div className="signUpBtn">
                    <Link to="/loginId" className="backBtn">이전</Link>
                    <Link to="/signUp/infoInput" className="nextBtn">다음</Link>
                </div>
             
           
        </div>
    );
}

export default Register;