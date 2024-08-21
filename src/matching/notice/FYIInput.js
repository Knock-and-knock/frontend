import { useContext, useEffect } from "react";
import { InfoContext } from "../Match";

function FYIInput({ handleIsInfoChange }) {
  const { userInfo, setUserInfo } = useContext(InfoContext);

  const handleName = (e) => {
    const value = e.target.value;
    setUserInfo({ ...userInfo, name: value });
    handleIsInfoChange(value.trim() !== "" && userInfo.phone.trim() !== "");
  };

  const phoneAutoHyphen = (value) => {
    return value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
  };

  const handlePhone = (e) => {
    let value = e.target.value;
    value = phoneAutoHyphen(value);
    setUserInfo({ ...userInfo, phone: value });
    handleIsInfoChange(userInfo.name.trim() !== "" && value.trim() !== "");
  };

  useEffect(() => {
    handleIsInfoChange(userInfo.name.trim() !== "" && userInfo.phone.trim() !== "");
  }, [userInfo.name, userInfo.phone, handleIsInfoChange]);

  return (
    <div className="input-container">
      <input value={userInfo.name} onChange={handleName} placeholder="이름" />
      <input
        type="tel"
        value={userInfo.phone}
        maxLength="13"
        onChange={handlePhone}
        placeholder="전화번호"
      />
    </div>
  );
}

export default FYIInput;
