import "cardCreate/application/CardApplication.css";
import Header from "header/Header.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressSearchComponent from "./AddressSearchComponent";
import { useFamilyCardCreate } from "./FamilyCardApp";

function FamilyAddAddress() {

  const { subUserInfo, setSubUserInfo } = useFamilyCardCreate();
  const navigate = useNavigate();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handlePaging = () => {
    navigate("/familycard/fsimplepw");
  };

  // 다음 주소검색 api
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    // 주소 업데이트 및 userInfo에 저장
    setSubUserInfo({ ...subUserInfo, address: fullAddress /*district*/ });
    setIsPostcodeOpen(false); // 주소 검색 후 창 닫기
  };
  // 빈칸 확인
  useEffect(() => {
    const extraInfo = [
      "address",
      "detailAddress",
    ];
    const isFull = extraInfo.every(
      (field) =>
        subUserInfo[field] &&
      subUserInfo[field].trim() !== ""
    );

    setIsButtonEnabled(isFull);
  }, [subUserInfo]);

  const handleDetailAddressChange = (e) => {
    const value = e.target.value;
    setSubUserInfo({ ...subUserInfo, detailAddress: value });
  };

  return (
    <div className="card-app-container">
      <Header />
      <div className="app-title">
        <div className="title-text">
          <span>가족의 집주소를</span>
          <br />
          <span>입력해주세요</span>
        </div>
        <div className="pageNumber">3/4</div>
      </div>
      <div className="app-input-container">
        <div className="app-input">
          <input
            placeholder="도로명, 지번, 건물명 검색"
            value={subUserInfo.address || ""}
            onClick={() => setIsPostcodeOpen(true)}
            readOnly
          />
        </div>
        <div className="app-input">
          <input
            placeholder="상세주소"
            value={subUserInfo.detailAddress || ""}
            onChange={handleDetailAddressChange}
          />
        </div>
        <p className="caption-text">해당 주소로 카드가 배송됩니다.</p>
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

export default FamilyAddAddress;
