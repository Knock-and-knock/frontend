import React, { useEffect, useRef, useState } from 'react';
import SignUpHeader from './header/SignUpHeader';
import { Link } from 'react-router-dom';
import { useMember } from 'signUp/SignUpMain';

function PinCheck(props) {
    const [pin,setPin] =useState("");
    const inputRef = useRef(null);
    const {userInfo, handleChange} = useMember();
    
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChangePinCheck = (e) => {
        const value = e.target.value.slice(0, 6);
        setPin(value);
    };
    const handleSumitClick =()=>{

    }
    const circles = Array(6).fill(null); 
    return (
        <div>
            <SignUpHeader/>
            <div className="signup-container">
                <div className="circle-wrap">
                    {circles.map((_, index) => (
                        <div key={index}  className={`small-circle ${pin.length > index ? 'filled' : ''}`}></div>
                    ))}
                </div>
                <input
                ref={inputRef}
                type="tel"
                value={pin}
                name='userpinchk'
                onChange={handleChangePinCheck}
                className="hidden-input"
                style={{ 
                    opacity: 0, 
                    position: 'absolute', 
                    zIndex: -1 
                }}
            />
            </div>
            <div className="signUpBtn">
                <Link to="../pinsetup" className="signup-backBtn">이전</Link>
                <Link to="../signupsuccess" className="signup-nextBtn" >다음</Link>
            </div>
        </div>
    );
}

export default PinCheck;