import { CommonContext } from 'App3';
import Header from 'header/Header';
import React, { useContext, useEffect, useState } from 'react';
import MyBasicInfo from './component/MyBasicInfo';
import MyExtraInfo from './component/MyExtraInfo';
import "mypage/MyPage.css"
import DisconnectionModal from './component/modal/DisconnectionModal';
import { call } from 'login/service/ApiService';



function MyPage(props) {

    const{loginUser,setLoginUser} = useContext(CommonContext);
    const loginUserType = localStorage.getItem("loginUser");
    const [userInfo, setUserInfo] = useState('');
    // const [matchingInfo, setMatchingInfo] = useState('');

    useEffect(()=>{
        setLoginUser(loginUserType);
    },[loginUserType,setLoginUser]);

    useEffect(()=>{
        call('/api/v1/users','GET',null).then(
            (response)=>{
                setUserInfo(response);
                console.log(response);
            }
        ).catch((error)=>{
            console.log("정보조회 오류", error);
        });

    },[]);

    const getModal = (loginUser)=>{
        switch(loginUser){
            case 'PROTEGE':
                return <DisconnectionModal userInfo={userInfo}/>;
            default: 
                return "";
        }
    };
    
    return (
        <div className='mypage-container'>
            <Header/>
            <p className='mypage-name'>{userInfo.userName}</p>
            <MyBasicInfo userInfo={userInfo}/>
            <MyExtraInfo userInfo={userInfo}/>
            {getModal(loginUser)}
            <div className='mypage-bottom'>
                <p className='logoutBtn'>로그아웃</p>
                <p className='withdrawalBtn'>회원탈퇴</p>
            </div>
            
        </div>
    );
}

export default MyPage;