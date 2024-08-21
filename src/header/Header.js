import styles from 'header/Header.module.css'; // CSS 모듈 import
import back from "image/Back.png";
import home from "image/gohome.png";
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const getTitle = (pathname) => {
    switch (pathname) {
      case "/dolbomMain":
        return "복지 서비스 예약하기";
      case "/welfareCheckPW":
        return "결제하기";
      case "/welfareCheckSpec":
        return "복지 서비스 예약하기";
      case "/welfareInputAddress":
        return "복지 서비스 예약하기";
      case "/welfareInputBirth":
        return "복지 서비스 예약하기";
      case "/welfareInputDisease":
        return "복지 서비스 예약하기";
      case "/welfareInputGender":
        return "복지 서비스 예약하기";
      case "/welfareInputHeight":
        return "복지 서비스 예약하기";
      case "/welfareList":
        return "복지 서비스 예약하기";
      case "/welfaremain":
        return "복지 서비스";
      case "/welfareReservedList":
        return "복지 서비스 예약내역";
      case "/welfareSetPW":
        return "간편 결제 등록";
      case "/cardcreate":
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
      case "/cardapp/address":
        return "카드신청";
      case "/cardapp/simplepw":
        return "카드신청";
      default:
        return null;
    }
  };

  return (
    <header>
      <div className={styles["header-container"]}>
        <div className={styles["header-info"]}>
          <img
            src={back}
            alt="뒤로가기"
            className={styles["back-icon"]}
            onClick={() => navigate(-1)} // 뒤로가기 기능 추가
          />
          <p className={styles["header-name"]}>{getTitle(location.pathname)}</p>
          <img
            src={home}
            alt="홈 가기"
            className={styles["home-icon"]}
            onClick={() => navigate("/main")} // 홈으로 가기 기능 추가
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
