import { useNavigate } from 'react-router-dom';
import LoginBtn from './component/button/LoginBtn';
import LoginHeader from './component/header/LoginHeader';
import LoginOptionModal from './component/modal/LoginOptionModal';
import "./Login.css";
import { signin } from './service/ApiService';

function LoginId(props) {
    const navigate =useNavigate();
    const handleGoSignUp = () =>{
        navigate("/signUp/register")
    }
    const handleSubmit = (event) => {
        event.preventDefault(); //default이벤트 취소
        const data = new FormData(event.target);
        const userId = data.get("userId");
        const userPassword = data.get("userPassword");
        console.log({ userId: userId, userPassword: userPassword });
        // ApiService의 signin 메서드를 사용 해 로그인.
        signin({ userId: userId, userPassword: userPassword });
      };

    return (
        <div>
            <LoginHeader/>
            <form noValidate onSubmit={handleSubmit}>
                <div className="login-container">
                    <input className="login-input" type="text" name='userId' placeholder="아이디"/>
                    <input className="login-input" type="password" name='userPassword' placeholder="비밀번호"/>
               
                    <div className="login-options">
                        <p>아이디 찾기</p>
                        <p>비밀번호 찾기</p>
                        <p onClick={handleGoSignUp}>회원가입</p>
                    </div>
                </div>
                <LoginOptionModal/>
                <LoginBtn/>
            </form>
        </div>
    );
}

export default LoginId;