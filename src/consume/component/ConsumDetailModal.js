import Modal from 'react-modal';
import "consume/component/ConsumDetailModal.css"

function ConsumDetailModal({isOpen,closeModal}) {
   
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          },
          content: {
            height: "280px",
            margin: "auto",
            borderRadius: "15px",
            padding: "20px",
          },
    };
    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
                <p className='csModal-title'>상세조회</p>
                <div className='csModal-content csModal-line'>
                    <p>GS25 편의점결제</p>
                    <p>홍길동</p>
                </div>
                <div className='csModal-content'>
                    <p>거래일자</p>
                    <p>2024.08.21 13:46</p>
                </div>
                <div className='csModal-content'>
                    <p>카테고리</p>
                    <p>식비</p>
                </div>
                <div className='csModal-content csModal-dashed'>
                    <p>카드종류</p>
                    <p>개인/신용카드</p>
                </div>
                <div className='csModal-content csModal-line'>
                    <p>이용금액</p>
                    <p className='csModal-price'><span className='csModal-Num'>8,500</span>원</p>
                </div>
                <button className='csModalBtn' onClick={closeModal}>닫기</button>
            </Modal>
        </div>
    );
}

export default ConsumDetailModal;