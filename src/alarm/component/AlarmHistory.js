import React, { useEffect, useState } from 'react';
import 'alarm/component/AlarmHistory.css'
import { call } from 'login/service/ApiService';

function AlarmHistory({handleOpenModal}) {
    const [alarmList, setAlarmList] = useState([]);
    useEffect(()=>{
        call('/api/v1/notification/read',"GET",null).then((response)=>{
            setAlarmList(response);
        }).catch((error)=>{
            alert("알람 조회 실패");
        });
    },[]);

    let previousDate = '';
    return (
        <>
         {alarmList.map((alarmlist, index) => {
                // 알람의 날짜를 추출
                const currentDate = alarmlist.notificationDateTime.split('T')[0];

                // 날짜가 이전 날짜와 다른 경우에만 날짜를 표시
                const showDate = currentDate !== previousDate;
                previousDate = currentDate; // 현재 날짜를 이전 날짜로 업데이트

                return (
                    <div key={index} className='alarmHistory' onClick={handleOpenModal}>
                        {showDate && <p className='alarm-date'>{currentDate}</p>}
                        <div className='alarmHistory-content'>
                            <p className='alarm-text'>{alarmlist.notificationTitle}</p>
                            {alarmlist.notificationIsCheck ? <div className='alarm-circle' /> : ""}
                            <p className='alarm-time'>한 시간 전</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default AlarmHistory;