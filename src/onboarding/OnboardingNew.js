import logo from "image/logo.svg";
import backimg from "image/onboarding-img.png";
import "onboarding/OnboardingNew.css";
import { useNavigate } from "react-router-dom";

function OnboardingNew(props) {
  const navi = useNavigate();
  const handleBtnClick = () => {
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    if (ACCESS_TOKEN) {
      navi("/home");
    } else {
      navi("/loginid");
    }
  };
  return (
    <div className="onboarding-container">
      <img src={logo} alt="로고" className="onboarding-logo" />
      <span className="onboarding-text">고령자를 위한<br/>음성기반 대화형<br/>금융 복지 지원 플랫폼</span>
      <img src={backimg} alt="로고" className="back-img" />
      <div className="startBtn-wrap">
        <button className="startBtn" onClick={handleBtnClick}>
          시작
        </button>
      </div>
    </div>
  );
}

export default OnboardingNew;
