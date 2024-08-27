import logo from "image/logo.png";
import "home/component/Header.css";

function Header(props) {
    return (
        <div className='main-header'>
            <img src={logo} alt="logo" className="main-logo" />
            <p><a href="/mypage" className="main-name">홍길동님▶</a></p>
        </div>
    );
}

export default Header;