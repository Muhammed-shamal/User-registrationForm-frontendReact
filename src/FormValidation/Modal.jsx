import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './Modal.css'


Modal.setAppElement('#root'); // Set the root element for accessibility

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.5s ease-in-out',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',

    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        transition: 'opacity 0.5s ease-in-out',
    },
};

const CustomModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Form Submission"
            style={modalStyle}
        >
            <div class="cookiesContent" id="cookiesPopup">
                <button class="mb-2 btn btn-danger close" onClick={onClose}>✖</button>
                <img style={{ width: "80px", marginBottom: "15px", marginTop: '15px' }} src="https://www.shutterstock.com/image-vector/flat-round-check-mark-green-260nw-652023034.jpg" alt="cookies-img" />
                <p>Login Successfull.</p>
                <button className="btn btn-success accept" onClick={onClose}>That's fine!</button>
            </div>
        </Modal>
    );
};

export default CustomModal;






// style = {{
//     backgroundColor: '#007bff',
//     color: 'white',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
// }}