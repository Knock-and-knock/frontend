import "cardCreate/application/CardApplication.css";
import Header from "header/Header";
import { useNavigate } from "react-router-dom";

function DefaultInfo(props) {
  const navigate = useNavigate();
  const handlePaging=()=>{
    navigate("/cardapp/extrainfo");
  }
  return (
    <div className="card-app-container">
      <Header />
      <div className="app-title">
        <div className="title-text">
          <span>기본정보를</span>
          <br />
          <span>확인해 주세요</span>
        </div>
        <div className="pageNumber">1/8</div>
      </div>
      <div className="app-input-container">
        <div className="app-input">
          <span>이름</span>
          <input placeholder="이름" />
        </div>
        <div className="app-input">
          <span>연락처</span>
          <input placeholder="전화번호" />
        </div>
      </div>
      <button className="appBtn" onClick={handlePaging}>다음</button>
    </div>
  );
}

export default DefaultInfo;
