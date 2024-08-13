import 'welfare/main/component/header/HeaderA.css';
import LogoNav from "welfare/main/component/header/LogoNav";
import ProfileA from "welfare/main/component/header/ProfileA";

function Header(props) {
  return (
    <div className="white-back">
      <div className="top-nav">
        <LogoNav />
        <ProfileA />
      </div>
    </div>
  );
}

export default Header;
