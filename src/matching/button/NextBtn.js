import "matching/button/button.css";

function NextBtn({ handleNextBtn, isDisabled }) {
  return (
    <button
      type="button"
      className="match-nextBtn"
      onClick={handleNextBtn}
      disabled={isDisabled}
    >
      다음
    </button>
  );
}

export default NextBtn;
