import { CommonContext } from "App3";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginBtn from "./component/button/LoginBtn";
import LoginHeader from "./component/header/LoginHeader";
import "./Login.css";
import { signin } from "./service/ApiService";

function LoginId(props) {
  const { loginUser, setLoginUser } = useContext(CommonContext);
  const navigate = useNavigate();
  const handleGoSignUp = () => {
    navigate("/signup/register");
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //default이벤트 취소
    const data = new FormData(event.target);
    const userId = data.get("userId");
    const userPassword = data.get("userPassword");
    console.log({ userId: userId, userPassword: userPassword });
    signin({ userId: userId, userPassword: userPassword, loginType: "NORMAL" });
    const loginUserType = localStorage.getItem("loginUser");
    setLoginUser(loginUserType);
  };

  return (
    <div>
      <LoginHeader />
      <form noValidate onSubmit={handleSubmit}>
        <div className="login-container">
          <input
            className="login-input"
            type="text"
            name="userId"
            placeholder="아이디"
          />
          <input
            className="login-input"
            type="password"
            name="userPassword"
            placeholder="비밀번호"
          />

          <div className="login-options">
            <p className="border-separator">아이디 찾기</p>
            <p className="border-separator">비밀번호 찾기</p>
            <p onClick={handleGoSignUp}>회원가입</p>
          </div>
        </div>
        <LoginBtn />
      </form>
    </div>
  );
}

export default LoginId;
