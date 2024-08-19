import 'matching/button/button.css';

function NextBtn({handleNextBtn}) {
  return (
    <button type="button" className="nextBtn" onClick={handleNextBtn}>다음</button>
  );
}

export default NextBtn;