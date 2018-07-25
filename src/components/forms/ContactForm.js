import React, { Component } from 'react';
import ContactModal from '../modals/ContactModal';
import Loading from 'react-loading-animation';
import PropTypes from 'prop-types';
import './ContactForm.scss';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                firstname: '',
                lastname: '',
                email: '',
                message: ''
            },
            errors: {},
            showContactModal: false
        }
    }

    showContactModal = () => {
        this.setState({
            ...this.state,
            showContactModal: true
        });
    }

    closeContactModal = () => {
        this.setState({
            ...this.state,
            showContactModal: false
        });
    }

    clearInputValues = () => {
        this.setState({
            ...this.state,
            showContactModal: false,
            data: {
                firstname: '',
                lastname: '',
                email: '',
                message: ''
            }
        });

        this.props.handleClearInfo();
    }

    onSubmit = e => {
        e.preventDefault();

        const errors = this.validate(this.state.data);

        this.setState({
            errors
        })

        if(Object.keys(errors).length === 0) {
            this.props.handleSendEmail(this.state.data);
        }
    }

    validate = data => {
        const errors = {};
        let Regex = /^[a-zA-ZąłżźćńśęóĄŁŹŻĆŃŚĘÓ]+$/;

        if(!data.firstname.trim())
            errors.firstname = "TO POLE JEST WYMAGANE";
        else if(!Regex.test(data.firstname.trim()))
            errors.firstname = "Pole zawiera znaki specjalne";

        if(!data.lastname.trim())
            errors.lastname = "TO POLE JEST WYMAGANE";
        else if(!Regex.test(data.lastname.trim()))
            errors.lastname = "Pole zawiera znaki specjalne";

        if(!data.email.trim())
            errors.email = "TO POLE JEST WYMAGANE";
            
        if(!data.message.trim())
            errors.message = "TO POLE JEST WYMAGANE";
        else if(data.message.trim().length < 5)
            errors.message = "Wymagane conajmniej 5 znaków";

        return errors;
    }

    onChange = e => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        const { data, errors } = this.state;

        return (
            <div className="container" id="contact">
                <div className="mask">
                    <form className="contact-form" onSubmit={this.onSubmit}>
                        <h1><span>Skontaktuj</span> się z nami</h1>
                        <div className="contact-form--field">
                            <label className="contact-form--field--label">Imię<span>{!!errors.firstname ? ` (${errors.firstname})` : ""}</span></label>
                            <input 
                                type="text" 
                                name="firstname"
                                autoComplete="off"
                                className={!!errors.firstname ? "contact-form--field--input-error" : "contact-form--field--input"}
                                value={data.firstname}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="contact-form--field">
                            <label className="contact-form--field--label">Nazwisko<span>{!!errors.lastname ? ` (${errors.lastname})` : ""}</span></label>
                            <input 
                                type="text" 
                                name="lastname"
                                autoComplete="off"
                                className={!!errors.lastname ? "contact-form--field--input-error" : "contact-form--field--input"}
                                value={data.lastname}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="contact-form--field">
                            <label className="contact-form--field--label">E-mail<span>{!!errors.email ? ` (${errors.email})` : ""}</span></label>
                            <input 
                                type="email" 
                                name="email"
                                autoComplete="off"
                                className={!!errors.email ? "contact-form--field--input-error" : "contact-form--field--input"}
                                value={data.email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="contact-form--field">
                            <label className="contact-form--field--label">Wiadomość<span>{!!errors.message ? ` (${errors.message})` : ""}</span></label>
                            <textarea 
                                name="message"
                                className={!!errors.message ? "contact-form--field--textarea-error" : "contact-form--field--textarea"}
                                value={data.message}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="contact-form--field">
                            <button onClick={this.showContactModal} className="contact-form--field--submit-button"><a>Wyślij</a></button>
                        </div>
                        {this.state.showContactModal && !this.props.email.isFetching && (Object.keys(this.props.email.payload).length > 0 || Object.keys(this.props.email.error).length > 0) &&
                            <ContactModal email={this.props.email} clearInputValues={this.clearInputValues} closeModal={this.closeContactModal} />
                        }
                        <Loading isLoading={this.state.showContactModal && this.props.email.isFetching && (Object.keys(this.props.email.payload).length === 0 || Object.keys(this.props.email.error).length === 0)} />
                    </form>
                </div>
            </div>
        );
    }
}

Content.propTypes = {
    email: PropTypes.arrayOf(PropTypes.shape({
        isError: PropTypes.bool.isRequired,
        isFetching: PropTypes.bool.isRequired,
        error: PropTypes.array.isRequired,
        error: PropTypes.array.isRequired,
    })).isRequired,
    handleSendEmail: PropTypes.func.isRequired,
    handleClearInfo: PropTypes.func.isRequired
}

export default Content;