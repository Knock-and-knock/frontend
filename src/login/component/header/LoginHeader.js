import { useLocation } from 'react-router-dom';
import "./LoginHeader.css";

function LoginHeader(props) {
    const location = useLocation();

      // 경로에 따라 제목을 설정하는 함수
      const getTitle = (pathname) => {
        switch (pathname) {
            case '/loginBio':
                return '생체인증 로그인';
            case '/loginId':
                return '아이디 로그인';
            case '/loginPw':
                return '간편비밀번호 로그인';
                
            // => 추가 경로에 따라 제목 설정
            default:
                return '';
        }
    };

    return (
        <div className="header-wrap">
             <p className="headtitle">{getTitle(location.pathname)}</p>
        </div>
    );
}

export default LoginHeader;