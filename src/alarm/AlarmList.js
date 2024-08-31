import "alarm/AlarmList.css";
import Header from 'header/Header';
import AlarmHistory from './component/AlarmHistory';
import AlarmMark from './component/AlarmMark';

function AlarmList(props) {
  


    return (
        <div className='alarmList-container'>
            <Header/>
            <AlarmMark/>
            <AlarmHistory />
            
        </div>
    );
}

export default AlarmList;