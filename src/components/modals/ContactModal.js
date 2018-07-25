import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactModal.scss';

class ContactModal extends Component {
    closeModal = () => {
        this.props.closeModal();

        if(!this.props.email.isError)
            this.props.clearInputValues();
    }

    render() {
        const { isError } = this.props.email;

        return (
            <div className="modal-wrapper" onClick={this.closeModal}>
                <div className="modal">
                    <div className={!!isError ? "modal--error" : "modal--checkmark"}>{!!isError ? "x" : ""}</div>
                    <h2>{!!isError ? "Ups.." : "Sukces!"}</h2>
                    <h3>{!!isError ? "Coś poszło nie tak :(" : "Twoja wiadomość została wysłana :)"}</h3>
                </div>
            </div>
        );
    }
}

ContactModal.propTypes = {
    email: PropTypes.arrayOf(PropTypes.shape({
        isError: PropTypes.bool.isRequired,
        isFetching: PropTypes.bool,
        error: PropTypes.array,
        payload: PropTypes.array,
    })).isRequired,
    closeModal: PropTypes.func.isRequired
}

export default ContactModal;