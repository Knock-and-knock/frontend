import Header from 'header/Header';
import "mypage/component/ModifyInfo.css";
import InfoInput from './InfoInput';

function ModifyInfo(props) {
    const userType = localStorage.getItem("userType");

    const buttonStyle = userType === "PROTEGE" ? { backgroundColor: '#FF961B'} : {};
    return (
        <div className='modiInfo-container'>
            <Header/> 
            <div className="app-title">
                <div className="title-text">
                    <span>변경사항을</span>
                    <br />
                    <span>입력해 주세요</span>
                </div>
            </div>
            <InfoInput/>
            <button className='modiInfo-saveBtn' style={buttonStyle}>저장</button>
        </div>
    );
}

export default ModifyInfo;