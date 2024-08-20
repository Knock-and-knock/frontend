import "cardCreate/header/CardCreateHeader.css";
import back from "image/Back.png";
import home from "image/gohome.png";
import { useLocation, useNavigate } from "react-router-dom";

function CardCreateHeader() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const location = useLocation();
  // 경로에 따라 제목을 설정하는 함수 (수정하기)
  const getTitle = (pathname) => {
    switch (pathname) {
      case "/cardCreate":
        return "카드신청";
      case "/cardapp/defaultinfo":
        return "카드신청";
      case "/cardapp/extrainfo":
        return "카드신청";
      case "/cardapp/agreement":
        return "카드신청";
      case "/cardapp/creditinfo":
        return "카드신청";
      case "/cardapp/fundsourceinfo":
        return "카드신청";
      case "/cardapp/":
        return "카드신청";
      case "/cardapp/":
        return "카드신청";
      case "/cardapp/":
        return "카드신청";
      default:
        return null;
    }
  };

  return (
    <header>
      <div className="cardCreate-header-wrap">
        <div className="cardCreate-header">
          <div className="header-info">
            <img
              src={back}
              alt="뒤로가기"
              className="back-icon"
              onClick={handleBack}
            />
            <p className="header-name">{getTitle(location.pathname)}</p>
            <img src={home} alt="홈 가기" className="home-icon" />
          </div>
        </div>
      </div>
    </header>
  );
}
export default CardCreateHeader;
