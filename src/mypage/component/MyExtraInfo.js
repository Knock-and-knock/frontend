import { CommonContext } from "App3";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyExtraInfo({userInfo}) {
    const [geder, setGender] =useState('');
    const navi = useNavigate();
    const handelSubstituteClick=()=>{
        navi("/subinput");
    };
    const handleModifyClick=()=>{
        navi("/modifyinfo",{state:{userInfo}});
    }
    const {loginUser} = useContext(CommonContext);
    const getSubstituteBtn = (userType)=>{
        switch(userType){
            case 'PROTECTOR':
                return <button className='substituteBtn' onClick={handelSubstituteClick}>어르신 정보 대신 입력하기</button>;
            default:
                return "";
        }
    };
    useEffect(()=>{
        if(userInfo.protegeGender===1){
            setGender('남');
        }else if(userInfo.protegeGender===2){
            setGender('여');
        }
    },[]);   
    return (
        <div className='info-container'>
            <div className='info-title'>
                <p><span >{userInfo.protegeName}</span>의 부가정보</p>
                <p className='info-changeBtn' onClick={handleModifyClick}>변경</p>
            </div>
            <div className='info-content'>
                <p>생년월일</p>
                <p>{userInfo.protegeBirth}</p>
            </div>
            <div className='info-content'>
                <p>성별</p>
                <p>{geder}</p>
            </div>
            <div className='info-content'>
                <p>키</p>
                <p>{userInfo.protegeHeigt}</p>
            </div>
            <div className='info-content'>
                <p>몸무게</p>
                <p>{userInfo.protegeweight}</p>
            </div>
            <div className='info-content'>
                <p>질병</p>
                <p>{userInfo.protegeDisease}</p>
            </div>
            <div className='info-content'>
                <p>주소</p>
                <p>{userInfo.protegeAddress}</p>
            </div>
            <div className='info-content'>
                <p>이메일</p>
                <p>{userInfo.protegeEmail}</p>
            </div>
            {getSubstituteBtn(loginUser)}
        </div>
    );
}

export default MyExtraInfo;