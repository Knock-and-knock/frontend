import Header from 'header/Header';
import React, { useContext } from 'react';
import MyBasicInfo from './component/MyBasicInfo';
import MyExtraInfo from './component/MyExtraInfo';
import "mypage/MyPage.css"
import DisconnectionModal from './component/modal/DisconnectionModal';
import { CommonContext } from 'App';

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