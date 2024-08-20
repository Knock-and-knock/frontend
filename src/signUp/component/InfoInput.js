import React, { useEffect, useState } from 'react';
import SignUpHeader from './header/SignUpHeader';
import { Link } from 'react-router-dom';
import { useMember } from '../SignUpMain';

function InfoInput(props) {
    const {userInfo,handlechange} =useMember();
    const [isNextEnabled, setIsNextEnabled] = useState(false);

    useEffect(() => {
        const { userName, userPhone} = userInfo;
        const isValid = userName && userPhone;
        setIsNextEnabled(isValid);
    }, [userInfo]);

    const formatPhoneNumber = (value) => {
        return value
            .replace(/[^0-9]/g, '')  // 숫자만 남기기
            .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`); // 하이픈 추가
    };
    const handlePhoneChange = (event) => {
        const { name, value } = event.target;
        if (name === 'userPhone') {
            event.target.value = formatPhoneNumber(value);
        }
        handlechange(event); // 원래의 handleChange 함수 호출
    };
    return (
        <div>
            <SignUpHeader/>
            <div className="signup-container">
                <input onChange={handlechange} className="signup-input" type="text" name='userName' placeholder="이름"/>
                <div className='check-input check-username'></div>
                <input onChange={handlePhoneChange} className="signup-input" type="tel" name='userPhone' placeholder="전화번호" maxLength={13}/>
                <div className='check-input check-userphone'></div> 
            </div>
            <div className="signUpBtn">
                <Link to="../register" className="signup-backBtn">이전</Link>
                <Link to="../verifycode" className={`signup-nextBtn ${isNextEnabled ? '' : 'disabled'}`}
                      onClick={(e) => !isNextEnabled && e.preventDefault()}>다음</Link>
            </div>
        </div>
    );
}

export default InfoInput;