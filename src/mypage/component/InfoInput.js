import AddressSearchComponent from 'cardCreate/application/AddressSearchComponent';
import { useState } from 'react';
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
                <input type='text' placeholder={protegeInfo.protegeBirth}/>
            </div>
            <div className='infoInput-box'>
                <p>성별</p>
                <input type='text'placeholder={protegeInfo.protegeGender}/>
            </div>
            <div className='bodyInfo'>
                <div className='bodyInfo-box'>
                    <p>키</p>
                    <div className='body-content'>
                        <input type='number'placeholder={protegeInfo.protegeHeight}/>
                        <p>cm</p>
                    </div>
                </div>
                <div className='bodyInfo-box'>
                    <p>몸무게</p>
                    <div className='body-content'>
                        <input type='number' placeholder={protegeInfo.protegeWeight}/>
                        <p className='body-content'>kg</p>
                    </div>
                </div>
            </div>
            <div className='infoInput-box'>
                <p>질병</p>
                <input type='text'placeholder={protegeInfo.protegeDisease}/>
            </div>
            <div className='infoInput-box'>
                <p>주소</p>
                <div onClick={() => setIsPostcodeOpen(true)}>
                    <input 
                        type='text' 
                        placeholder={protegeInfo.protegeAddress}
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
                <input type='text' placeholder='347동 1002호'/>
            </div>
            
        </div>
    );
}

export default InfoInput;