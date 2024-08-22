import AddressSearchComponent from 'cardCreate/application/AddressSearchComponent';
import { useState } from 'react';
import glasses from "image/glasses.png";

function InfoInput(props) {
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
                <input type='text' placeholder='1950.01.01'/>
            </div>
            <div className='infoInput-box'>
                <p>성별</p>
                <input type='text'placeholder='남'/>
            </div>
            <div className='bodyInfo'>
                <div className='bodyInfo-box'>
                    <p>키</p>
                    <div className='body-content'>
                        <input type='number'placeholder='175'/>
                        <p>cm</p>
                    </div>
                </div>
                <div className='bodyInfo-box'>
                    <p>몸무게</p>
                    <div className='body-content'>
                        <input type='number' placeholder='75'/>
                        <p className='body-content'>kg</p>
                    </div>
                </div>
            </div>
            <div className='infoInput-box'>
                <p>질병</p>
                <input type='text'placeholder='감기'/>
            </div>
            <div className='infoInput-box'>
                <p>주소</p>
                <div onClick={() => setIsPostcodeOpen(true)}>
                    <input 
                        type='text' 
                        placeholder='경기도 과천시 별양로 66-11' 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        className='addressInfo'
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
            <div className='infoInput-box'>
                <p>이메일</p>
                <input type='email' placeholder='qwer1234@naver.com'/>
            </div>
            
        </div>
    );
}

export default InfoInput;