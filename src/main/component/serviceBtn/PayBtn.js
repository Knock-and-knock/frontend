import payhistory from 'image/icon/payhistory.png';

function PayBtn(props) {
  return (
    <div className="button">
      <img src={payhistory} alt="소비내역" className="icon" />
      <p className="button-text">소비내역</p>
    </div>
  );
}

export default PayBtn;
