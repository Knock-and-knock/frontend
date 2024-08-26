import { call } from 'login/service/ApiService';
import 'main/component/header/HeaderB.css';
import { useEffect, useState } from 'react';

function Profile(props) {
  const [userName, setUserName] = useState('');
  useEffect(()=>{
    call('/api/v1/users','GET',null).then((response)=>{
      setUserName(response.userName)
    }).catch();
  });
  return (
    <div className="main-header">
      <div className="profile-info">

        <h2 className="profile-name"><a href="/mypage">{userName}님 ▶</a></h2>

        <p className="profile-subtext">홍길동님의 보호자</p>
      </div>
    </div>
  );
}

export default Profile;
