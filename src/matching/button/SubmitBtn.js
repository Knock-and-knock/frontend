import 'matching/button/button.css';

function SubmitBtn({handleSubmitBtn}) {

  return (
    <button type="button" className="submitBtn" onClick={handleSubmitBtn}>매칭알림 보내기</button>
  );
}

export default SubmitBtn;