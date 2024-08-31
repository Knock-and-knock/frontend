import "matching/MatchingModal.css";
import Modal from "react-modal";

function VoiceChatMovePageModal({ isOpen, closeModal,handleSubmit}) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 999,
    },
    content: {
      height: "200px",
      margin: "auto",
      borderRadius: "15px",
      padding: "20px",
    },
  };

  

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <p className="matchModal-title">이동</p>
        <div className="matchModal-content matchModal-line">
          <p>
            해당 페이지로<span className="blueText">이동</span>하시겠습니까?
          </p>
        </div>
        <div className="modalContainer">
          <button className="matchModalAgreeBtn" onClick={closeModal}>
            닫기
          </button>
          <button className="matchModalBtn" onClick={handleSubmit}>
            예
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default VoiceChatMovePageModal;
