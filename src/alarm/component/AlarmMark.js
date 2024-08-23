import React from 'react';
import "alarm/component/AlarmMark.css"

function AlarmMark(props) {
    return (
        <div className='alarmMark-container'>
            <p>읽지 않은 알람 <span className='alarmMarkNum'>2건</span></p>
            <p>모두읽음</p>
        </div>
    );
}

export default AlarmMark;