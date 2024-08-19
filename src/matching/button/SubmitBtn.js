import "matching/button/button.css";

function SubmitBtn({ handleSubmitBtn, isDisabled }) {
  return (
    <button
      type="button"
      className="submitBtn"
      onClick={handleSubmitBtn}
      disabled={isDisabled}
    >
      매칭알림 보내기
    </button>
  );
}

export default SubmitBtn;
