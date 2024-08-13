import welfare from 'image/icon/welfare.png';

function WelfareBtn(props) {
  return (
    <div className="button">
      <img src={welfare} alt="복지서비스" className="icon" />
      <p className="button-text">복지서비스</p>
    </div>
  );
}

export default WelfareBtn;