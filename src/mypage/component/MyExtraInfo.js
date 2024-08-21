import { CommonContext } from "App3";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function MyExtraInfo(props) {
    const navi = useNavigate();
    const handelSubstituteClick=()=>{
        navi("/subinput");
    };
    const handleModifyClick=()=>{
        navi("/modifyinfo");
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
                <p>aaa</p>
            </div>
            <div className='info-content'>
                <p>성별</p>
                <p>aaa</p>
            </div>
            <div className='info-content'>
                <p>키</p>
                <p>aaa</p>
            </div>
            <div className='info-content'>
                <p>몸무게</p>
                <p>aaa</p>
            </div>
            <div className='info-content'>
                <p>질병</p>
                <p>aaa</p>
            </div>
            <div className='info-content'>
                <p>주소</p>
                <p>aaa</p>
            </div>
            <div className='info-content'>
                <p>이메일</p>
                <p>aaa</p>
            </div>
            {getSubstituteBtn(loginUser)}
        </div>
    );
}

export default MyExtraInfo;