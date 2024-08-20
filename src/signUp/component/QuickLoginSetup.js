import React, { useState } from 'react';
import SignUpHeader from './header/SignUpHeader';
import { Link } from 'react-router-dom';
import check from 'image/icon/small-check.svg';

function QuickLoginSetup(props) {
    const [isPinChecked, setIsPinChecked] = useState(false);
    const [isBioChecked, setIsBioChecked] = useState(false);

    const handlePinCircleClick = () => {
        setIsPinChecked(!isPinChecked);
    };
    const handleBioCircleClick = () => {
        setIsBioChecked(!isBioChecked);
    };

    return (
        <div>
            <SignUpHeader/>
            <div className="signup-container">
                <div className='signup-quickLogin'>
                    <p className='quickLogin-title'>간편비밀번호</p>
                    <div className='quickLogin-content'>
                        <p>비밀번호 6자리로 로그인 합니다</p>
                        <div className='icon-check' onClick={handlePinCircleClick}>
                            <img src={check} alt="간편로그인설정" className="check" />
                            <div 
                                className={`icon-circle ${isPinChecked ? 'checked' : ''}`} 
                               
                            />
                        </div>
                    </div>
                    <input 
                        type="checkbox" 
                        id="chk" 
                        checked={isPinChecked}
                        onChange={() => setIsPinChecked(!isPinChecked)}
                        style={{ display: 'none' }} 
                    />

                </div>
                <div className='signup-quickLogin'>
                    <p className='quickLogin-title'> 생체인증</p>
                    <div className='quickLogin-content'> 
                        <p>등록된 지문으로 로그인 합니다 </p>
                        <div className='icon-check' onClick={handleBioCircleClick}>
                            <img src={check} alt="간편로그인설정" className="check" />
                            <div 
                                className={`icon-circle ${isBioChecked ? 'checked' : ''}`} 
                            />
                        </div>
                    </div>
                    <input 
                        type="checkbox" 
                        id="chk" 
                        checked={isBioChecked}
                        onChange={() => setIsBioChecked(!isBioChecked)}
                        style={{ display: 'none' }} 
                    />
                </div>
                
                </div>
            <div className="signUpBtn">
                <Link to="../signupsuccess" className="signup-backBtn">건너뛰기</Link>
                <Link to="../pinsetup" className="signup-nextBtn">설정</Link>
            </div>
        </div>
    );
}

export default QuickLoginSetup; 