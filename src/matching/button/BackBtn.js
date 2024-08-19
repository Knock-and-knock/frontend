import 'matching/button/button.css';


function BackBtn({handleBackBtn}) {
  return (
    <button type="button" className="backBtn" onClick={handleBackBtn}>이전</button>
  );
}

export default BackBtn;