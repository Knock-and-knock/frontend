import Modal from 'react-modal';

function ConsumDateModal({isOpen,closeModal}) {
    
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
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
                <p>aaa</p>
            </Modal>
        </div>
    );
}

export default ConsumDateModal;