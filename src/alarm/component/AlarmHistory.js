import React from 'react';
import 'alarm/component/AlarmHistory.css'

function AlarmHistory(props) {
    return (
        <div className='alarmHistory'>
            <p className='alarm-date'>2024.08.06</p>
            <div className='alarmHistory-content'>
                <p className='alarm-text'> 어르신께 이상 금융거래로 의심되는 상황을 감지했어요</p> 
                <div className='alarm-circle'></div>
                <p className='alarm-time'>한 시간 전</p>
            </div>
            <div className='alarmHistory-content'>
                <p className='alarm-text'> 어르신께 이상 금융거래로 의심되는 상황을 감지했어요</p> 
                <div className='alarm-circle'></div>
                <p className='alarm-time'>한 시간 전</p>
            </div>
            <div className='alarmHistory-content'>
                <p className='alarm-text'> 어르신께 이상 금융거래로 의심되는 상황을 감지했어요</p> 
                <div className='alarm-circle'></div>
                <p className='alarm-time'>한 시간 전</p>
            </div>
            <div className='alarmHistory-content'>
                <p className='alarm-text'> 어르신께 이상 금융거래로 의심되는 상황을 감지했어요</p> 
                <div className='alarm-circle'></div>
                <p className='alarm-time'>한 시간 전</p>
            </div>
        </div>
    );
}

export default AlarmHistory;