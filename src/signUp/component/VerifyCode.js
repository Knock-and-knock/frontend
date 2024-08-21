import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import SignUpHeader from './header/SignUpHeader';
import { useMember } from 'signUp/SignUpMain';

function VerifyCode(props) {
    const [code, setCode] = useState("");
    const inputRef = useRef(null);


    useEffect(() => {
        inputRef.current.focus();
    }, []);


    const handleInputCode = (e) => {
        const value = e.target.value.slice(0, 6);
        setCode(value);
    };
    const squares = Array(6).fill(null);
    return (
        <div>
            <SignUpHeader/>
            <div className="signup-container" >
                <div className="square-container">
                        {squares.map((_, index) => (
                            <div key={index} className='square'>{code[index] || ''}</div>
                        ))}
                </div>
                <input
                    ref={inputRef}
                    type="tel"
                    value={code}
                    onChange={handleInputCode}
                    className="hidden-input"
                    maxLength={6}
                    name='verifycode'
                    
                />
            </div>
            <div className="signUpBtn">
                <Link to="../infoinput" className="signup-backBtn">이전</Link>
                <Link to="../rolecheck" className="signup-nextBtn">다음</Link>
            </div>
        </div>
    );
}

export default VerifyCode;