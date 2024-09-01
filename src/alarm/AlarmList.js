import "alarm/AlarmList.css";
import Header from 'header/Header';
import AlarmHistory from './component/AlarmHistory';
import AlarmMark from './component/AlarmMark';
import { useEffect, useState } from "react";
import { call } from "login/service/ApiService";

function AlarmList(props) {

    const [alarmList, setAlarmList] = useState([]);
    // 알람 목록 조회
    useEffect(() => {
        getAlarmList();
    }, []);

    const getAlarmList = ()=>{
        call('/api/v1/notification/read', "GET", null)
        .then(response => setAlarmList(response))
        .catch(() => alert("알람 조회 실패"));
    };

    return (
        <div className='alarmList-container'>
            <Header/>
            <AlarmMark getAlarmList={getAlarmList}/>
            <AlarmHistory alarmList={alarmList}/>
            
        </div>
    );
}

export default AlarmList;