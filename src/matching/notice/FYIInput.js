import { useState } from "react";

function FYIInput(props) {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const handleName = (e)=>{
    setNameValue(e.target.value);
  }
  const handlePhone = (e)=>{
    setPhoneValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input value={nameValue} onChange={handleName} placeholder="이름"/>
      <input value={phoneValue} onChange={handlePhone} placeholder="전화번호"/>
    </div>
  );
}

export default FYIInput;