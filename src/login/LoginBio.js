import fingerprint from 'image/icon/fingerprint.svg';
import LoginBtn from './component/button/LoginBtn';
import LoginHeader from './component/header/LoginHeader';

function LoginBio(props) {
    return (
        <div>
            <LoginHeader/>
            <div className="login-container">
                <div className='icon-bio'>
                    <div className='circle'/>
                    <img src={fingerprint} alt="생체인증로그인" className="fingerprint" /> 
                </div>
            </div>
            <LoginBtn/>
        </div>
    );
}

export default LoginBio;