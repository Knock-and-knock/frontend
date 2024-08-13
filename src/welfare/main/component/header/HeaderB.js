import 'welfare/main/component/header/HeaderB.css';
import LogoNav from "welfare/main/component/header/LogoNav";
import ProfileB from "welfare/main/component/header/ProfileB";

function Header(props) {
  return (
    <div className="white-back">
      <div className="top-nav">
        <LogoNav />
        <ProfileB />
      </div>
    </div>
  );
}

export default Header;
