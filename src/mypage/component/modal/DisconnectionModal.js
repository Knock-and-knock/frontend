import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import "mypage/component/modal/DisconnectionModal.css"

function DisconnectionModal(props) {
    
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => {
        setIsOpen(true);
    };
    
    const closeModal = () => {
        setIsOpen(false);
    }
    useEffect(()=>{
        document.body.classList.toggle("unscrollable",isOpen)
    },[isOpen]);
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          },
          content: {
            height: "220px",
            margin: "auto",
            borderRadius: "15px",
            padding: "20px",
          },
    };
    return (
        <div>
            <button className='disconnectBtn' onClick={handleOpenModal} >현재 상대와 매칭 종료</button>
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
                <p className='dcModal-title'>매칭종료</p>
                <p className='dcModal-content'>정말로 매칭을&nbsp;<span>종료</span>하시겠습니까?</p>
                <div className='dcModal-btn'>
                    <button onClick={closeModal} className='dcModal-cancelBtn'>닫기</button>
                    <button className='dcModal-agreeBtn'>예</button>
                </div>
                
            </Modal>
        </div>
    );
}

export default DisconnectionModal;