import { useContext, useEffect } from "react";
import { InfoContext } from "../Match";

function TitleInput({ handleIsInfoChange }) {
  const { userInfo, setUserInfo } = useContext(InfoContext);

  const handleMname = (e) => {
    const value = e.target.value;
    setUserInfo({ ...userInfo, mname: value });
    handleIsInfoChange(value.trim() !== "" && userInfo.yname.trim() !== "");
  };

  const handleYname = (e) => {
    const value = e.target.value;
    setUserInfo({ ...userInfo, yname: value });
    handleIsInfoChange(userInfo.mname.trim() !== "" && value.trim() !== "");
  };

  useEffect(() => {
    handleIsInfoChange(userInfo.mname.trim() !== "" && userInfo.yname.trim() !== "");
  }, [userInfo.mname, userInfo.yname, handleIsInfoChange]);

  return (
    <div className="input-container">
      <p>
        어르신께
        <input
          className="titleInput"
          value={userInfo.mname}
          onChange={handleMname}
        />
        라고 불리고 싶어요
      </p>
      <p>
        어르신을
        <input
          className="titleInput"
          value={userInfo.yname}
          onChange={handleYname}
        />
        라 부르고 싶어요
      </p>
    </div>
  );
}

export default TitleInput;
