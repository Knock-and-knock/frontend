import "cardCreate/application/CardApplication.css";
import Header from "header/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCardCreate } from "./CardApp";

function ExtraInfo(props) {
  const { userInfo, setUserInfo } = useCardCreate();
  const handlechange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handlePaging = () => {
    navigate("/cardapp/agreement");
  };

  // const [nameLast, setNameLast] = useState("");
  // const [nameFirst, setNameFirst] = useState("");
  // const [email, setEmail] = useState("");
  // const [accountNumber, setAccountNumber] = useState("");
  //const [selected, setSelected] = useState("은행명");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  //은행 select메뉴
  const selectList = [
    { value: "default", name: "은행명" },
    { value: "shinhan", name: "신한은행" },
    { value: "woori", name: "우리은행" },
  ];
  // 빈칸 확인
  useEffect(() => {
    const extraInfo = [
      "engFirstName",
      "engLastName",
      "email",
      "account",
      "bank",
    ];
    const isFull = extraInfo.every(
      (field) =>
        userInfo[field] &&
        userInfo[field].trim() !== "" &&
        userInfo[field] !== "default"
    );

    setIsButtonEnabled(isFull);
  }, [userInfo]);

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
            <input
              className="firstInput"
              placeholder="영문 성"
              name="engFirstName"
              onChange={handlechange}
              value={userInfo.engFirstName}
            />
            <input
              className="secInput"
              placeholder="영문 이름"
              name="engLastName"
              onChange={handlechange}
              value={userInfo.engLastName}
            />
          </div>
          <p className="caption-text">여권과 동일한 영문명을 입력해 주세요</p>
        </div>
        <div className="app-input">
          <span>이메일</span>
          <input
            placeholder="이메일주소"
            name="email"
            onChange={handlechange}
            value={userInfo.email}
          />
          <p className="caption-text">
            카드발급 후 신청내용(계약서) 및 상품설명서,
            <br />
            신용카드 설명서, 약관을 이메일로 보내드립니다.
          </p>
        </div>
        <div className="app-input">
          <span>계좌</span>
          <div className="double-input-container">
            <select
              className="bankSelectMenu"
              name="bank"
              onChange={handlechange}
              value={userInfo.bank}
            >
              {selectList.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
            <input
              className="secInput"
              placeholder="계좌번호"
              name="account"
              onChange={handlechange}
              value={userInfo.account}
            />
          </div>
        </div>
      </div>
      <button
        className="appBtn"
        onClick={handlePaging}
        disabled={!isButtonEnabled}
        style={{
          backgroundColor: isButtonEnabled
            ? "#80BAFF"
            : "rgba(128,186,255,0.5)",
        }}
      >
        다음
      </button>
    </div>
  );
}

export default ExtraInfo;
