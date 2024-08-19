import { Link } from 'react-router-dom';
import success from 'image/icon/success.png';

function SignUpSuccess(props) {

    return (
        <div>
            <div className='success-container'>
                <img src={success} alt="회원가입 성공" className="icon-success" />
                <p className='signup-success'>회원가입 완료</p>
            </div>
            <Link to="/loginBio" className='goLoginBtn'>로그인 하러 가기</Link>
        </div>
    );
}

export default SignUpSuccess;