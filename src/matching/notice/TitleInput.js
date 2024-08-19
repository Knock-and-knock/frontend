import { useEffect, useState } from "react";

function TitleInput({handleIsInfoChange}) {
  const [mnameValue, setMnameValue] = useState("");
  const [ynameValue, setYnameValue] = useState("");

  const handleMname = (e) => {
    const value = e.target.value;
    setMnameValue(value);
    handleIsInfoChange(value.trim() !== "" && ynameValue.trim() !== "");
  };
  const handleYname = (e) => {
    const value = e.target.value;
    setYnameValue(value);
    handleIsInfoChange(mnameValue.trim() !== "" && value.trim() !== "");
  };

  useEffect(() => {
    handleIsInfoChange(mnameValue.trim() !== "" && ynameValue.trim() !== "");
  },[mnameValue, ynameValue,handleIsInfoChange]);

  return (
    <div className="input-container">
      <p>
        어르신께
        <input
          className="titleInput"
          value={mnameValue}
          onChange={handleMname}
        />
        라고 불리고 싶어요
      </p>
      <p>
        어르신을
        <input
          className="titleInput"
          value={ynameValue}
          onChange={handleYname}
        />
        라 부르고 싶어요
      </p>
    </div>
  );
}

export default TitleInput;
