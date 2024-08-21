import { CommonContext } from 'App3';
import Header from 'header/Header';
import "mypage/MyPage.css";
import { useContext } from 'react';
import DisconnectionModal from './component/modal/DisconnectionModal';
import MyBasicInfo from './component/MyBasicInfo';
import MyExtraInfo from './component/MyExtraInfo';

function MyPage(props) {
    const{loginUser} = useContext(CommonContext);
    const getModal = (loginUser)=>{
        switch(loginUser){
            case 'PROTEGE':
                return <DisconnectionModal/>;
            default: 
                return "";
        }
    };
    return (
        <div className='mypage-container'>
            <Header/>
            <p className='mypage-name'>홍길동님</p>
            <MyBasicInfo/>
            <MyExtraInfo/>
            {getModal(loginUser)}
            <div className='mypage-bottom'>
                <p className='logoutBtn'>로그아웃</p>
                <p className='withdrawalBtn'>회원탈퇴</p>
            </div>
            
        </div>
    );
}

export default MyPage;