import { useNavigate } from 'react-router-dom';
import LoginBtn from './component/button/LoginBtn';
import LoginHeader from './component/header/LoginHeader';
import LoginOptionModal from './component/modal/LoginOptionModal';
import "./Login.css";

function LoginId(props) {
    const navigate =useNavigate();
    const handleGoSignUp = () =>{
        navigate("/signUp")
    }
    return (
        <div>
            <LoginHeader/>
            <div className="login-container">
                <input className="login-input" type="text" placeholder="아이디"/>
                <input className="login-input" type="text" placeholder="비밀번호"/>
                <div className="login-options">
                    <p>아이디 찾기</p>
                    <p>비밀번호 찾기</p>
                    <p onClick={handleGoSignUp}>회원가입</p>
                </div>
            </div>
            <LoginOptionModal/>
            <LoginBtn/>
        </div>
    );
}

export default LoginId;