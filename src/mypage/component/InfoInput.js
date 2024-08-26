import AddressSearchComponent from 'cardCreate/application/AddressSearchComponent';
import { useEffect, useState } from 'react';
import glasses from "image/glasses.png";

function InfoInput({protegeInfo}) {
    const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
    const [address, setAddress] = useState('');


  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName) {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress? ` (${extraAddress})` : "";
    }

      
    setAddress(fullAddress);
    setIsPostcodeOpen(false);
    };
    
    
    return (
        <div className='infoInput-container'>
            <div className='infoInput-box'>
                <p>생년월일</p>
                <input type='text' placeholder={protegeInfo?.protegeBirth || "생년월일"}/>
            </div>
            <div className='infoInput-box'>
                <p>성별</p>
                <input type='text'placeholder={protegeInfo?.protegeGender || "성별"}/>
            </div>
            <div className='bodyInfo'>
                <div className='bodyInfo-box'>
                    <p>키</p>
                    <div className='body-content'>
                        <input type='number'placeholder={protegeInfo?.protegeHeight || "키"}/>
                        <p>cm</p>
                    </div>
                </div>
                <div className='bodyInfo-box'>
                    <p>몸무게</p>
                    <div className='body-content'>
                        <input type='number' placeholder={protegeInfo?.protegeWeight || "몸무게"}/>
                        <p className='body-content'>kg</p>
                    </div>
                </div>
            </div>
            <div className='infoInput-box'>
                <p>질병</p>
                <input type='text'placeholder={protegeInfo?.protegeDisease || "질병"}/>
            </div>
            <div className='infoInput-box'>
                <p>주소</p>
                <div onClick={() => setIsPostcodeOpen(true)}>
                    <input 
                        type='text' 
                        placeholder={protegeInfo?.protegeAddress || "도로명, 지번, 건물명 검색"}
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        className='addressInfo' readOnly
                    />
                    <img src={glasses} alt="돋보기" className="addressInfo-icon" />
                </div>

                {isPostcodeOpen && (
                    <AddressSearchComponent
                    onComplete={handleComplete}
                    onClose={() => setIsPostcodeOpen(false)}
                    />
                )}
                <input type='text' placeholder={protegeInfo?.protegeDetailAddress || "상세주소"}/>
            </div>
            
        </div>
    );
}

export default InfoInput;