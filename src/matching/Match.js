import NextBtn from "matching/button/NextBtn";
import SkipBtn from "matching/button/SkipBtn";
import Header from "matching/header/Header";
import "matching/header/Header.css";
import "matching/Match.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBtn from "./button/BackBtn";
import SubmitBtn from "./button/SubmitBtn";
import FYIInput from "./notice/FYIInput";
import FYINotice from "./notice/FYINotice";
import TitleInput from "./notice/TitleInput";
import TitleNotice from "./notice/TitleNotice";

function Match(props) {
  //컴포넌트 변경 state
  const [info, setInfo] = useState(1);
  //화면링크navigate
  const navigate = useNavigate();
  //다음버튼
  const handleNextBtn = () => {
    setInfo(2);
  };
  //뒤로가기 버튼
  const handleBackBtn = () => {
    setInfo(1);
  };
  //매칭전송버튼
  const handleSubmitBtn=()=>{
    navigate("/matching");
  }


  return (
    <div className="container">
      <Header />
      {info === 1 ? <FYINotice /> : <TitleNotice />}
      {info === 1 ? <FYIInput /> : <TitleInput />}
      <div className="btnContainer">
        {info === 1 ? (
          <SkipBtn handleNextBtn={handleNextBtn} />//스킵버튼 제거, 다음버튼 정보 입력 전까지 비활성
        ) : (
          <BackBtn handleBackBtn={handleBackBtn} />
        )}
        {info === 1 ? <NextBtn handleNextBtn={handleNextBtn} /> : <SubmitBtn handleSubmitBtn={handleSubmitBtn}/>}
      </div>
    </div>
  );
}

export default Match;
