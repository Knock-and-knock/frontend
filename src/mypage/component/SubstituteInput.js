import Header from 'header/Header';
import React from 'react';
import InfoInput from './InfoInput';
import "mypage/component/ModifyInfo.css";
import { useNavigate } from 'react-router-dom';

function SubstituteInput(props) {
    const navi = useNavigate();
    const handleSubmit =()=>{
        navi('/mypage');
    }
    return (
        <div className='subInput-container'>
            <Header/> 
            <div className="app-title">
                <div className="title-text">
                    <span>어르신의 정보를</span>
                    <br />
                    <span>입력해 주세요</span>
                </div>
            </div>
            <InfoInput/>
            <button className='modiInfo-saveBtn' onClick={handleSubmit}>저장</button>
        </div>
    );
}

export default SubstituteInput;