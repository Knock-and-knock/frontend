import { CommonContext } from "App3";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function MyExtraInfo({userInfo}) {
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
    return (
        <div className='info-container'>
            <div className='info-title'>
                <p>부가정보</p>
                <p className='info-changeBtn' onClick={handleModifyClick}>변경</p>
            </div>
            <div className='info-content'>
                <p>생년월일</p>
                <p>{userInfo.userBitrh}</p>
            </div>
            <div className='info-content'>
                <p>성별</p>
                <p>{userInfo.userGender}</p>
            </div>
            <div className='info-content'>
                <p>키</p>
                <p>{userInfo.userHeigt}</p>
            </div>
            <div className='info-content'>
                <p>몸무게</p>
                <p>{userInfo.userweight}</p>
            </div>
            <div className='info-content'>
                <p>질병</p>
                <p>{userInfo.userDisease}</p>
            </div>
            <div className='info-content'>
                <p>주소</p>
                <p>{userInfo.userAddress}</p>
            </div>
            <div className='info-content'>
                <p>이메일</p>
                <p>{userInfo.userEmail}</p>
            </div>
            {getSubstituteBtn(loginUser)}
        </div>
    );
}

export default MyExtraInfo;