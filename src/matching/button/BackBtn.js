import 'matching/button/button.css';

function BackBtn({handleBackBtn, style}) {
  return (
    <button type="button" className="backBtn" onClick={handleBackBtn}>이전</button>
  );
}

export default BackBtn;