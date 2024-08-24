import { CommonContext } from "App3";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyExtraInfoContent from "./MyExtraInfoContent";
import info from "image/icon/info.png";

function MyExtraInfoTest({userInfo}) {
    

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
                return null;
        }
    };
    

  
    return (
        <div className='info-container'>
            <div className='info-title'>
                {/* <p><span className="info-protegeName">{userInfo.protegeName === userInfo.userName?"나":`${userInfo.protegeName}님`}</span>의 부가정보</p> */}
                <p><span className="info-protegeName">홍길동님</span>의 부가정보</p>
            </div>
            
            <p className="info-container-text"><img src={info} alt="" className="card-info-icon" />등록된 정보가 없습니다.</p>
            {getSubstituteBtn(loginUser)} 
        </div>
    );
}

export default MyExtraInfoTest;