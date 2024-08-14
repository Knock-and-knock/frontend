import 'matching/button/button.css';

function SkipBtn({handleNextBtn}) {
  return (
    <button type="button" className="skipBtn" onClick={handleNextBtn}>건너뛰기</button>
  );
}

export default SkipBtn;