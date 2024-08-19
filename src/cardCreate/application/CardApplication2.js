import "cardCreate/application/CardApplication.css";
import Header from "cardCreate/header/CardCreateHeader";
import { useNavigate } from "react-router-dom";

function CardApplication2(props) {
  const navigate = useNavigate();
  const handlePage3 = () => {
    navigate("/cardapp3");
  };
  return (
    <div className="card-app-container">
      <Header />
      <div className="app-title">
        <div className="title-text">
          <span>추가정보를</span>
          <br />
          <span>입력해 주세요</span>
        </div>
        <div className="pageNumber">2/8</div>
      </div>
      <div className="app-input-container">
        <div className="app-input">
          <span>영문명</span>
          <div className="double-input-container">
            <input className="firstInput" placeholder="영문 성" />
            <input className="secInput" placeholder="영문 이름" />
          </div>
        </div>
        <div className="app-input">
          <span>이메일</span>
          <input placeholder="전화번호" />
        </div>
        <div className="app-input">
          <span>계좌</span>
          <input placeholder="전화번호" />
        </div>
      </div>
      <button className="appBtn" onClick={handlePage3}>
        다음
      </button>
    </div>
  );
}

export default CardApplication2;
