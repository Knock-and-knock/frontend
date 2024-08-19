import React, { useState } from 'react';
import "./LoginOptionModal.css";
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

function LoginOptionModal(props) {
    const navigate =useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    }
    const handleGoLoginBio = () =>{
        navigate("/loginBio")
    }
    const handleGoLoginId = () =>{
        navigate("/loginId")
    }
    const handleGoLoginPw = () =>{
        navigate("/loginPw")
    }
    const customStyles = {
        overlay:{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
    };
    
    return (
        <div>
            <div className="login-option">
                <p className="text-normal" onClick={handleOpenModal}>다른 로그인 방법</p>
            </div>
            <Modal isOpen={isOpen} onRequestClose={closeModal} className="login-modal" style={customStyles}>
                <div className="modal-content">
                    <p className="modal-title">로그인 방법을 선택해 주세요</p>
                    <div className="bio" onClick={handleGoLoginBio}>
                        <p className="modal-text">생체인증</p>
                    </div>
                    <div className='pw' onClick={handleGoLoginPw}>
                        <p className="modal-text">간편비밀번호</p>
                        </div>
                    <div className='id' onClick={handleGoLoginId}>
                        <p className="modal-text">아이디</p>
                    </div>

                </div>
               
            </Modal>
           
        </div>
    );
}

export default LoginOptionModal;