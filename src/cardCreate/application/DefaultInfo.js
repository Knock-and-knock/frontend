import "cardCreate/application/CardApplication.css";
import Header from "header/Header";
import { call } from "login/service/ApiService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DefaultInfo(props) {
  
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const navigate = useNavigate();

  const handlePaging = () => {
    navigate("/cardapp/extrainfo");
  };
  useEffect(() => {
    call("/api/v1/card/myInfo", "GET")
      .then((response) => {
        setUserName(response.userName);
        setUserPhone(response.userPhone);
      })
      .catch((error) => {
      });
  });

  return (
    <div className="card-app-container">
      <Header />
      <div className="app-title">
        <div className="title-text">
          <span>기본정보를</span>
          <br />
          <span>확인해 주세요</span>
        </div>
        <div className="pageNumber">1/7</div>
      </div>
      <div className="app-input-container">
        <div className="app-input">
          <span>이름</span>
          <input name="name" value={userName} readOnly />
        </div>
        <div className="app-input">
          <span>연락처</span>
          <input name="phoneNum" value={userPhone} readOnly />
        </div>
      </div>
      <button className="appBtn" onClick={handlePaging}>
        다음
      </button>
    </div>
  );
}

export default DefaultInfo;
