import React from 'react';
import Modal from 'react-modal';

const AddModal= (props) =>{
    return (
        <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.ClearModal}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
        >
        <h1 className="modal__title">The Selected Option:</h1>
        <h1 className="modal__body">{props.selectedOption}</h1>
        <button onClick={props.ClearModal} className="button">Okay</button>
        </Modal>
    );
}


export default AddModal;