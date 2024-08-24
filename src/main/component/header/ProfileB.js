import 'main/component/header/HeaderB.css';

function Profile(props) {
  return (
    <div className="main-header">
      <div className="profile-info">
        <h2 className="profile-name"><a href="/mypage">손동희님 ▶</a></h2>
        <p className="profile-subtext">홍길동님의 보호자</p>
      </div>
    </div>
  );
}

export default Profile;
