import React from 'react';
import { Modal as PopUp } from 'react-responsive-modal';


import './Modal.css';
import '@szhsin/react-menu/dist/index.css';
import 'react-responsive-modal/styles.css';

const Modal = (props) => {
    const handleCloseEvent = () => {
        props.onClose(props.value);
    }
    return (
        <PopUp open={props.state} onClose={handleCloseEvent} center classNames="modal-dialog">
            <div className="toolbar">
                {props.title}
            </div>
            <div className="contents vertical-scroll">
                {props.content}
            </div>
        </PopUp >
    );
};

export default Modal;