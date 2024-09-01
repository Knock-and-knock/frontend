import "alarm/component/AlarmMark.css";
import { call } from 'login/service/ApiService';
import { useEffect, useState } from 'react';

function AlarmMark({getAlarmList}) {
    const [isCheck, setIsCheck] = useState(false);
    const [alarmNum, setAlarmNum] = useState('');

    // 알림 수를 가져오는 함수
    const fetchAlarmCount = () => {
        call('/api/v1/notification/read/count', 'GET', null)
            .then(response => setAlarmNum(response.toString()))
            .catch(() => alert("알람 건수 조회 실패"));
    };

    const handleAlarmAllCheck=()=>{
        call('/api/v1/notification/allcheck',"PUT",null).then((response)=>{
            setIsCheck(true);
            fetchAlarmCount();
            getAlarmList();
        }).catch((error)=>{
            alert("모두 읽음 처리 실패");
        });
    };

    useEffect(()=>{
        fetchAlarmCount();
      },[]);

    return (
        <div className='alarmMark-container'>
            <p>읽지 않은 알람 <span className='alarmMarkNum'>{alarmNum}건</span></p>
            <p className={isCheck?"checked":""} onClick={handleAlarmAllCheck}>모두읽음</p>
        </div>
    );
}

export default AlarmMark;