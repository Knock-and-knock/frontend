import 'main/component/header/HeaderA.css';

function Profile(props) {
  return (
    <div className="main-header">
      <div className="profile-info">
        <h2 className="profile-name"><a href="/mypage">홍길동님 ▶</a></h2>
        <p className="profile-subtext">보호자: 손동희</p>
      </div>
    </div>
  );
}

export default Profile;
