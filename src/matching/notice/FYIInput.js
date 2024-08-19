import { useEffect, useState } from "react";

function FYIInput({ handleIsInfoChange }) {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const handleName = (e) => {
    const value = e.target.value;
    setNameValue(value);
    handleIsInfoChange(value.trim() !== "" && phoneValue.trim() !== "");
  };
  //자동하이픈
  const phoneAutoHyphen = (value) => {
    return value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
  };

  const handlePhone = (e) => {
    let value = e.target.value;
    value=phoneAutoHyphen(value);
    setPhoneValue(value);
    handleIsInfoChange(nameValue.trim() !== "" && value.trim() !== "");
  };

  useEffect(() => {
    handleIsInfoChange(nameValue.trim() !== "" && phoneValue.trim() !== "");
  }, [nameValue, phoneValue, handleIsInfoChange]);

  return (
    <div className="input-container">
      <input value={nameValue} onChange={handleName} placeholder="이름" />
      <input
        type="tel"
        value={phoneValue}
        maxLength="13"
        onChange={handlePhone}
        placeholder="전화번호"
      />
    </div>
  );
}

export default FYIInput;
