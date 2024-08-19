import { Link } from "react-router-dom";
import SignUpHeader from "./component/header/SignUpHeader";
import "./SignUp.css";

function Register(props) {
    return (
        <div>
            <SignUpHeader/>
            <div className="signup-container">
                <input className="login-input" type="text" placeholder="아이디(4 ~ 16자리 이내)"/>
                <input className="login-input" type="text" placeholder="비밀번호(8 ~ 16자리 이내"/>
                <input className="login-input" type="text" placeholder="비밀번호 확인"/>
            </div>
            <div className="signUpBtn">
                <Link to="/loginId" className="backBtn">이전</Link>
                <Link to="/infoInput" className="nextBtn">다음</Link>
            </div>
        </div>
    );
}

export default Register;