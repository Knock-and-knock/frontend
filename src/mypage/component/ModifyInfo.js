import Header from 'header/Header';
import { call } from 'login/service/ApiService';
import "mypage/component/ModifyInfo.css";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import InfoInput from './InfoInput';

function ModifyInfo() {
    const location = useLocation(); // 현재 위치를 가져옵니다.
    const { userInfo } = location.state || {};
    const userType = localStorage.getItem("loginUser");
    const navi = useNavigate();
    const [infoInput, setInfoInput] =useState({});
    const handlechange =(e)=>{
        setInfoInput({...infoInput, [e.target.name]:e.target.value} );
    };

    const buttonStyle = userType === "PROTEGE" ? { backgroundColor: '#FF961B'} : {};

    const handleSubmit = (event)=>{
        event.preventDefault();
        call("/api/v1/users","PUT",infoInput).then(
            (response)=>{
                navi("/mypage");
            }
        ).catch((error)=>{
            alert("실패");
        });
    };
    return (
        <div className='modiInfo-container'>
            <Header/> 
            <div className="app-title">
                <div className="title-text">
                    <span>{userInfo.userType==="PROTEGE"?"변경사항을":userInfo.protegeName +"의 정보를"}</span>
                    <br />
                    <span>입력해 주세요</span>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <InfoInput protegeInfo={userInfo} handlechange={handlechange}/>
                <button className='modiInfo-saveBtn' style={buttonStyle}>저장</button>
            </form>
            
        </div>
    );
}

export default ModifyInfo;