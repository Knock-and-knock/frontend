import React from 'react';

function MyBasicInfo(props) {
    return (
        <div className='info-container'>
            <div className='info-title'>
                <p>기본정보</p>
            </div>
            <div className='info-content'>
                <p>아이디</p>
                <p>aaa</p>
            </div>
            <div className='info-content'>
                <p>전화번호</p>
                <p>aaa</p>
            </div>
        </div>
    );
}

export default MyBasicInfo;