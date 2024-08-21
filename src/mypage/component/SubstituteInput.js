import Header from 'header/Header';
import React from 'react';

function SubstituteInput(props) {
    return (
        <div>
            <Header/>
            <p>어르신의 정보를</p>
            <p>입력해주세요</p>
            <input type='text'/>
        </div>
    );
}

export default SubstituteInput;