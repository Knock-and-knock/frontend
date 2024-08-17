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
  const [info, setInfo] = useState(1);
  const [isInfo, setIsInfo] = useState(false);
  const navigate = useNavigate();

  const handleNextBtn = () => {
    setInfo(2);
  };

  const handleBackBtn = () => {
    setInfo(1);
  };

  const handleBackPageBtn = () => {
    navigate(-1);
  };

  const handleSubmitBtn = () => {
    navigate("/matching");
  };

  const handleIsInfoChange = (isFilled) => {
    setIsInfo(isFilled);
  };

  return (
    <div className="container">
      <Header />
      {info === 1 ? <FYINotice /> : <TitleNotice />}
      {info === 1 ? (
        <FYIInput handleIsInfoChange={handleIsInfoChange} />
      ) : (
        <TitleInput />
      )}
      <div className="btnContainer">
        {info === 1 ? (
          <SkipBtn handleBackPageBtn={handleBackPageBtn} />
        ) : (
          <BackBtn handleBackBtn={handleBackBtn} />
        )}
        {info === 1 ? (
          <NextBtn handleNextBtn={handleNextBtn} isDisabled={!isInfo} />
        ) : (
          <SubmitBtn handleSubmitBtn={handleSubmitBtn} />
        )}
      </div>
    </div>
  );
}

export default Match;
