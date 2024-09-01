import "consume/component/ConsumDetailModal.css";
import Modal from 'react-modal';

function ConsumDetailModal({isOpen,closeModal,cardDetail}) {
    
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "3"
          },
          content: {
            backgroundColor: "transparent", /* 또는 rgba(255, 255, 255, 0) */
            border: "none",

        }
    };
    return (
        
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
                <div className='csModal-wrap'>
                    <p className='csModal-title'>상세조회</p>
                    <div className='csModal-content csModal-line'>
                        <p>{cardDetail.cardHistoryShopname}</p>
                        <p>{cardDetail.cardHistoryShopname}</p>
                    </div>
                    <div className='csModal-content'>
                        <p>거래일자</p>
                        <p>{cardDetail.cardHistoryApprove}</p>
                    </div>
                    <div className='csModal-content'>
                        <p>카테고리</p>
                        <p>{cardDetail.cardCategoryNo}</p>
                    </div>
                    <div className='csModal-content csModal-dashed'>
                        <p>카드종류</p>
                        <p>개인/신용카드</p>
                    </div>
                    <div className='csModal-content csModal-line'>
                        <p>이용금액</p>
                        <p className='csModal-price'><span className='csModal-Num'>{cardDetail.cardHistoryAmount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>원</p>
                    </div>
                    <button className='csModalBtn' onClick={closeModal}>닫기</button>
                </div>
                
            </Modal>
        
    );
}

export default ConsumDetailModal;