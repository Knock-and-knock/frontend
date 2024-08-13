import payReport from 'image/icon/payreport.png';

function PayReportBtn(props) {
  return (
    <div className="button">
      <img src={payReport} alt="소비리포트" className="icon" />
      <p className="button-text">소비리포트</p>
    </div>
  );
}

export default PayReportBtn;
