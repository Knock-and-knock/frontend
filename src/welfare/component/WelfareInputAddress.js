import "cardCreate/application/CardApplication.css";
import Header from "header/Header.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressSearchComponent from "cardCreate/application/AddressSearchComponent";
import { useSpecHook } from "./WelfareInputTotal";

function WelfareInputAddress() {
  const navigate = useNavigate();
  const { userSpec, setUserSpec } = useSpecHook();

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [address, setAddress] = useState(""); // 도로명 주소를 저장할 상태
  const [detailAddress, setDetailAddress] = useState(""); // 상세주소를 저장할 상태

  const handlePaging = () => {
    if (isButtonEnabled) {
      navigate("/welfare-input/disease");
    }
  };

  // 다음 주소검색 api
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  const handleComplete = (data) => {
    setAddress(data.address); // 선택된 주소를 address 상태에 저장
    setIsPostcodeOpen(false); // 주소 검색 후 창 닫기

    // userSpec에 주소 업데이트
    setUserSpec({ ...userSpec, address: data.address });
  };

  // 상세주소 변경 시 처리
  const handleDetailAddressChange = (e) => {
    const value = e.target.value;
    setDetailAddress(value);

    // userSpec에 상세주소 업데이트
    setUserSpec({ ...userSpec, detailAddress: value });
  };

  // 빈칸 확인
  useEffect(() => {
    const isFull = address.trim() !== "" && detailAddress.trim() !== "";
    setIsButtonEnabled(isFull);
  }, [address, detailAddress]);

  return (
    <div className="card-app-container">
      <Header />
      <div className="app-title">
        <div className="title-text">
          <span>집주소를</span>
          <br />
          <span>입력해주세요</span>
        </div>
      </div>
      <div className="app-input-container">
        <div className="app-input">
          <input
            placeholder="도로명, 지번, 건물명 검색"
            value={address || ""}
            onClick={() => setIsPostcodeOpen(true)}
            readOnly
          />
        </div>
        <div className="app-input">
          <input
            placeholder="상세주소"
            value={detailAddress || ""}
            onChange={handleDetailAddressChange}
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
      {isPostcodeOpen && (
        <AddressSearchComponent
          onComplete={handleComplete}
          onClose={() => setIsPostcodeOpen(false)}
        />
      )}
    </div>
  );
}

export default WelfareInputAddress;
