import back from 'image/Back.png';
function CardCreateHeader(props) {
  return (
    <div className="cardCreateHeader">
        <div className="header-info">
          <img src={back} alt="뒤로가기" className="back-icon" />
          <p className="header-name">카드신청</p>
          <img src={back} alt="홈 가기" className="home-icon" />
        </div>
      </div>
  );
}

export default CardCreateHeader;