import React, { useEffect, useState } from 'react';
import SignUpHeader from './header/SignUpHeader';
import { Link, useNavigate } from 'react-router-dom';
import check from 'image/icon/small-check.svg';
import { useMember } from 'signUp/SignUpMain';
import { call } from 'login/service/ApiService';

function QuickLoginSetup(props) {
    const [isPinChecked, setIsPinChecked] = useState(false);
    const [isBioChecked, setIsBioChecked] = useState(false);
    const {userInfo, setUserInfo} =useMember();
    const navi = useNavigate();
    
    useEffect(()=>{
        if (userInfo.userSimplePassword) {
                setIsPinChecked(true);
            } else {
                setIsPinChecked(false);
            }
        }, [userInfo.userSimplePassword]);

    const handlePinCircleClick = () => {
        if (isPinChecked) {
            setUserInfo(prevState => ({
                ...prevState,
                userSimplePassword: ''
            }));
        }else{
            setIsPinChecked(!isPinChecked);
            navi("/signup/pinsetup");
        }
        
    };
    const handleBioCircleClick = () => {
        setIsBioChecked(!isBioChecked);
    };
    const handleSumit = ()=>{
        call('http://122.128.54.136:20000/api/v1/users',"POST",userInfo).then((response)=>{
            console.log(response);
            window.location.href = "/signup/signupsuccess";
        }).catch((error)=>{
            alert("회원가입에 실패했습니다. 다시 시도해주세요");
            window.location.href = "/signup/register";
        });
    }
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
                <Link to="../rolecheck" className="signup-backBtn">이전</Link>
                <button className="signup-nextBtn" onClick={handleSumit}>저장</button>
            </div>
        </div>
    );
}

export default QuickLoginSetup; 