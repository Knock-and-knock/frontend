import { useState, useEffect } from "react";

function FYIInput({ handleIsInfoChange }) {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const handleName = (e) => {
    const value = e.target.value;
    setNameValue(value);
    handleIsInfoChange(value.trim() !== "" && phoneValue.trim() !== "");
  };

  const handlePhone = (e) => {
    const value = e.target.value;
    setPhoneValue(value);
    handleIsInfoChange(nameValue.trim() !== "" && value.trim() !== "");
  };

  useEffect(() => {
    handleIsInfoChange(nameValue.trim() !== "" && phoneValue.trim() !== "");
  }, [nameValue, phoneValue, handleIsInfoChange]);

  return (
    <div className="input-container">
      <input value={nameValue} onChange={handleName} placeholder="이름" />
      <input value={phoneValue} onChange={handlePhone} placeholder="전화번호" />
    </div>
  );
}

export default FYIInput;
