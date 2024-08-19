import { Link } from 'react-router-dom';

function SignUpSuccess(props) {

    return (
        <div>
            <p>회원가입 완료</p>
            <Link to="/loginBio">로그인 하러 가기</Link>
        </div>
    );
}

export default SignUpSuccess;