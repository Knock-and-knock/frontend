import alarm from "image/payAlarm.png";
import 'main/component/payAlarm/AlarmSection.css';

function AlarmSection(props) {
  return (
    <div className="main-section">
      <div className="chat-button">
        <img src={alarm} alt="이상징후" className="icon" />
        <div className="main-text">
          <p className="head-text">홍길동님의 소비이상징후</p>
          <p className="info-text">읽지 않은 알람:2건</p></div>
      </div>
    </div>
  );
}

export default AlarmSection;
