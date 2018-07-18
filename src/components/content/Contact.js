import React, { Component } from 'react';
import styled from 'styled-components';
import background from '../../static/img/bg.jpg';

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: red;
    background: url(${background});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
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
                }

                & .contact-form--field--input {
                    height: 30px;
                    width: calc(100% - 20px);
                    outline: none;
                    font-size: 14px;
                    padding: 0 10px;
                    border: 0;
                    border-bottom: 2px solid #fff;
                    background-color: rgba(0, 0, 0, 0);
                }
                
                & .contact-form--field--input:focus {
                    border-bottom: 2px solid #22a6b3;
                    transition: 0.4s all ease;
                }

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

                    @media screen and (max-width: 550px) {
                        max-height: 50px;
                        min-height: 50px;
                    }
                }

                & .contact-form--field--textarea:focus {
                    border-bottom: 2px solid #22a6b3;
                    transition: 0.4s all ease;
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
                    transition: all 0.2s ease-in-out 0.2s;
                    cursor: pointer;
                }

                & .contact-form--field--submit-button:hover {
                    background-color: rgba(255, 255, 255, .15);
                }
            }

            @media screen and (max-width: 550px) {
                padding: 5px;
            }
        }
    }
`;

class Content extends Component {
    render() {
        return (
            <Background>
                <div className="mask">
                    <form className="contact-form">
                        <h1><span>Skontaktuj</span> się z nami</h1>
                        <div className="contact-form--field">
                            <label className="contact-form--field--label">Imię</label>
                            <input type="text" className="contact-form--field--input"/>
                        </div>
                        <div className="contact-form--field">
                            <label className="contact-form--field--label">Nazwisko</label>
                            <input type="text" className="contact-form--field--input"/>
                        </div>
                        <div className="contact-form--field">
                            <label className="contact-form--field--label">E-mail</label>
                            <input type="email" className="contact-form--field--input"/>
                        </div>
                        <div className="contact-form--field">
                            <label className="contact-form--field--label">Wiadomość</label>
                            <textarea className="contact-form--field--textarea"/>
                        </div>
                        <div className="contact-form--field">
                            <button className="contact-form--field--submit-button"><a>Wyślij</a></button>
                        </div>
                    </form>
                </div>
            </Background>
        );
    }
}

export default Content;