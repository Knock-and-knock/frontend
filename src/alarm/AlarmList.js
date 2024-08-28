import Header from 'header/Header';
import React from 'react';
import AlarmMark from './component/AlarmMark';
import "alarm/AlarmList.css"
import AlarmHistory from './component/AlarmHistory';

function AlarmList(props) {
    return (
        <div className='alarmList-container'>
            <Header/>
            <AlarmMark/>
            <AlarmHistory/>
        </div>
    );
}

export default AlarmList;