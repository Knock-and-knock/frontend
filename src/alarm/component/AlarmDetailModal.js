import Modal from 'react-modal';
import "alarm/component/AlarmDetailModal.css"

function AlarmDetailModal({isOpen,closeModal}) {
   
    const AlarmDetailStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          },
          content: {
            top: "60%",
            left: "0",
            right: "0",
            bottom: "0",
            height: "auto",
            borderRadius: "15px 15px 0px 0px",
          },
    };
    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={AlarmDetailStyles}>
                <p className='adModal-title'>상세조회</p>
                {/* <hr></hr> */}
                <div className='adModal-info-title'>
                    <p>이상 징후</p>
                </div>

                <div className='adModal-content adModal-dashed'>
                    <p>어르신께 이상 금융거래로 의심되는 상황을 감지했어요</p>
                </div>
                <button className='adModalBtn' onClick={closeModal}>닫기</button>
            </Modal>
        </div>
    );
}

export default AlarmDetailModal;