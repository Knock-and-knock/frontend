import "matching/MatchingModal.css";
import Modal from "react-modal";

function MatchingModal({ isOpen, closeModal,handleSubmit}) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
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
        <p className="matchModal-title">매칭하기</p>
        <div className="matchModal-content matchModal-line">
          <p>
            <span className="blueText">홍길동보호자님</span>과 연결하시겠습니까?
          </p>
        </div>
        <div className="modalContainer">
          <button className="matchModalBtn" onClick={handleSubmit}>
            수락
          </button>
          <button className="matchModalBtn" onClick={closeModal}>
            닫기
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default MatchingModal;
