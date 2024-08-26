import AddressSearchComponent from 'cardCreate/application/AddressSearchComponent';
import glasses from "image/glasses.png";
import { useState } from 'react';

function InfoInput({protegeInfo,handlechange}) {
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
                <input type='date' 
                name='userBirth' 
                defaultValue={protegeInfo.protegeBirth} 
                onChange={handlechange}
                placeholder= "생년월일"/>
            </div>
            <div className='infoInput-box'>
                <p>성별</p>
                <div className='infoInput-gender'>
                    <p>남</p>
                    <input type='radio'
                    name='userGender' 
                    value="1"
                    onChange={handlechange}/>
                </div>
                <div className='infoInput-gender'>
                    <p>여</p>
                    <input type='radio'
                    name='userGender' 
                    value="2"
                    onChange={handlechange}/>
                </div>
                
            </div>
            <div className='bodyInfo'>
                <div className='bodyInfo-box'>
                    <p>키</p>
                    <div className='body-content'>
                        <input type='number' 
                        name='userHeight' 
                        defaultValue={protegeInfo.protegeHeight} onChange={handlechange}
                        placeholder="키"/>
                        <p>cm</p>
                    </div>
                </div>
                <div className='bodyInfo-box'>
                    <p>몸무게</p>
                    <div className='body-content'>
                        <input type='number' 
                        name='userWeight' 
                        defaultValue={protegeInfo.protegeWeight} 
                        onChange={handlechange}
                        placeholder="몸무게"/>
                        <p className='body-content'>kg</p>
                    </div>
                </div>
            </div>
            <div className='infoInput-box'>
                <p>질병</p>
                <input type='text'
                name='userDisease' 
                defaultValue={protegeInfo.protegeDisease} 
                onChange={handlechange}
                placeholder="질병"/>
            </div>
            <div className='infoInput-box'>
                <p>주소</p>
                <div onClick={() => setIsPostcodeOpen(true)}>
                    <input 
                        type='text' 
                        placeholder= "도로명, 지번, 건물명 검색"
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        className='addressInfo'
                        name='userAddress'
                    />
                    <img src={glasses} alt="돋보기" className="addressInfo-icon" />
                </div>

                {isPostcodeOpen && (
                    <AddressSearchComponent
                    onComplete={handleComplete}
                    onClose={() => setIsPostcodeOpen(false)}
                    />
                )}
                <input type='text' 
                name='userAddressDetail' 
                defaultValue={protegeInfo.protegeAddressDetail} 
                onChange={handlechange}
                placeholder="상세주소"/>
            </div>
            
        </div>
    );
}

export default InfoInput;