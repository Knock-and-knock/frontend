import "cardCreate/application/CardApplication.css";
import Header from "cardCreate/header/CardCreateHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CardApplication2(props) {
  const navigate = useNavigate();

  const handlePage3 = () => {
    navigate("/cardapp3");
  };
  //은행 select메뉴
  const [selected, setSelected] = useState("은행명");
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const selectList = [
    { value: "default", name: "은행명" },
    { value: "shinhan", name: "신한은행" },
    { value: "woori", name: "우리은행" },
  ];
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
          <p className="caption-text">여권과 동일한 영문명을 입력해 주세요</p>
        </div>
        <div className="app-input">
          <span>이메일</span>
          <input placeholder="이메일주소" />
          <p className="caption-text">
            카드발급 후 신청내용(계약서) 및 상품설명서,
            <br />
            신용카드 설명서, 약관을 이메일로 보내드립니다.
          </p>
        </div>
        <div className="app-input">
          <span>계좌</span>
          <div className="double-input-container">
            <select className="bankSelectMenu" onChange={handleSelect} value={selected}>
              {selectList.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
            <input className="secInput" placeholder="계좌번호" />
          </div>
        </div>
      </div>
      <button className="appBtn" onClick={handlePage3}>
        다음
      </button>
    </div>
  );
}

export default CardApplication2;
