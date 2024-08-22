import "cardCreate/application/CardApplication.css";
import Header from "header/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCardCreate } from "./CardApp";

function FamilyDefaultInfo(props) {
  const { userInfo, setUserInfo } = useCardCreate();
  

  const formatPhoneNumber = (value) => {
    return value
      .replace(/[^0-9]/g, '')  // 숫자만 남기기
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`); // 하이픈 추가
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name === "fphone") {
      setUserInfo({ ...userInfo, [name]: formatPhoneNumber(value) });
    } else {
      setUserInfo({ ...userInfo, [name]: value });
    }
  };

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const navigate = useNavigate();

  const handlePaging = () => {
    navigate("/cardapp/fextrainfo");
  };

  // 빈칸 확인
  useEffect(() => {
    const extraInfo = ["fname", "fphone"];
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
          <span>가족의 기본정보를</span>
          <br />
          <span>입력해 주세요</span>
        </div>
        <div className="pageNumber">1/4</div>
      </div>
      <div className="app-input-container">
        <div className="app-input">
          <span>이름</span>
          <input
            placeholder="이름"
            name="fname"
            onChange={handlechange}
            value={userInfo.fname || ""}
          />
        </div>
        <div className="app-input">
          <span>연락처</span>
          <input
            type="tel"
            placeholder="전화번호"
            name="fphone"
            onChange={handlechange}
            maxLength={13}
            value={userInfo.fphone || ""}
          />
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

export default FamilyDefaultInfo;
