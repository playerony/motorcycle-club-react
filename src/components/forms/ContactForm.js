import React, { Component } from 'react';
import styled from 'styled-components';
import ContactModal from '../modals/ContactModal';

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: #40a4c4;
    overflow: hidden;

    & > .mask {
        position: absolute;
        width: 100%;
        height: 100vh;
        background-color: rgba(64, 164, 196, .4);
        display: flex;

        & > .contact-form {
            margin: auto;
            padding: 15px;
            
            h1 {
                text-align: center;
                font-weight: 400;
                width: 400px;
                padding: 30px;

                span {
                    color: #fff;
                }

                @media screen and (max-width: 550px) {
                    width: 70%;
                }
            }

            & > .contact-form--field {
                display: block;
                margin: 10px auto;
                width: 100%;

                & .contact-form--field--label {
                    padding-left: 5px;
                    font-size: 14px;

                    & span {
                        color: #FF4040;
                        font-weight: 700;
                        font-size: 10px;
                    }
                }

                & .contact-form--field--input-error,
                & .contact-form--field--input {
                    height: 30px;
                    width: calc(100% - 20px);
                    outline: none;
                    font-size: 14px;
                    padding: 0 10px;
                    border: 0;
                    border-bottom: 2px solid #fff;
                    background-color: rgba(0, 0, 0, 0);
                    transition: 0.4s all ease;
                }
                
                & .contact-form--field--input-error {
                    border-bottom: 2px solid #FF4040;
                }

                & .contact-form--field--input:focus,
                & .contact-form--field--input-error:focus {
                    border-bottom: 2px solid #515151;
                }

                & .contact-form--field--textarea-error,
                & .contact-form--field--textarea {
                    max-width: 100%;
                    resize: vertical;
                    max-height: 200px;
                    min-height: 100px;
                    width: calc(100% - 20px);
                    outline: none;
                    font-size: 14px;
                    padding: 0 10px;
                    border: 0;
                    border-bottom: 2px solid #fff;
                    background-color: rgba(0, 0, 0, 0);
                    transition: 0.4s all ease-in-out;

                    @media screen and (max-width: 550px) {
                        max-height: 50px;
                        min-height: 50px;
                    }
                }

                & .contact-form--field--textarea-error {
                    border-bottom: 2px solid #FF4040;
                }

                & .contact-form--field--textarea:focus,
                & .contact-form--field--textarea-error:focus {
                    border-bottom: 2px solid #515151;
                }

                & .contact-form--field--submit-button {
                    display: block;
                    padding: 10px 70px 10px 70px;
                    border: 2px solid #fff;
                    font-size: 14px;
                    background-color: rgba(0, 0, 0, 0);
                    color: #fff;
                    outline: none;
                    margin: 30px auto;
                    transition: all 0.2s ease-in-out;
                    cursor: pointer;
                }

                & .contact-form--field--submit-button:hover {
                    background-color: rgba(255, 255, 255, .15);
                    padding: 10px 75px 10px 75px;
                }
            }

            @media screen and (max-width: 550px) {
                padding: 5px;
            }
        }
    }
`;

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
            showContactModal: true
        });
    }

    closeContactModal = () => {
        this.setState({
            showContactModal: false
        });
    }

    clearInputValues = () => {
        this.setState({
            ...this.state,
            data: {
                firstname: '',
                lastname: '',
                email: '',
                message: ''
            }
        });
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
        let Regex = /^[a-zA-Ząłżźćńśęó]+$/;

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
            <Background id="contact">
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
                        {this.state.showContactModal && (this.props.email.payload.length > 0 || this.props.email.error.length > 0) &&
                            <ContactModal email={this.props.email} clearInputValues={this.clearInputValues} closeModal={this.closeContactModal} />
                        }
                    </form>
                </div>
            </Background>
        );
    }
}

export default Content;