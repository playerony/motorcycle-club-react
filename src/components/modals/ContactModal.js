import React, { Component } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`    
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100vh;
    background-color: rgb(26, 26, 26, .6);
    display: flex;
    overflow: hidden;

    & > .modal {
        width: 500px;
        height: 300px;
        background-color: #fff;
        border-radius: 5px;
        margin: auto;
        padding: 30px;

        h2 {
            font-weight: 700;
            font-size: 50px;
            text-align: center;
            padding: 10px;

            @media screen and (max-width: 550px) {
                font-size: 30px;
            }
        }

        h3 {
            font-size: 24px;
            text-align: center;
            font-weight: 400;

            @media screen and (max-width: 550px) {
                font-size: 16px;
            }
        }

        & > .modal--checkmark {
            display:inline-block;
            padding: 30px 45px 30px 45px;
            border-radius: 100px;
            border: 10px solid rgba(165, 220, 134, .3);
            position: relative;
            top: 10px;
            left: calc(50% - 80px);
  
            &:after {
                content: '';
                display: block;
                width: 30px;
                height: 60px;
                border: solid #a5dc86;
                border-width: 0 10px 10px 0;
                transform: rotate(45deg);
                margin: 0 auto;
            }
        }

        & > .modal--error {
            font-size: 110px;
            font-weight: 600;
            color: #FF4040;
            border: 10px solid rgba(255, 64, 64, .3);
            width: 135px;
            text-align: center;
            border-radius: 100px;
            padding-bottom: 5px;
            position: relative;
            top: 10px;
            left: calc(50% - 85px);
        }
    }
`;

class ContactModal extends Component {
    closeModal = () => this.props.closeModal();

    render() {
        const { isError } = this.props.email;

        return (
            <ModalContainer onClick={this.closeModal}>
                <div className="modal">
                    <div className={!!isError ? "modal--error" : "modal--checkmark"}>{!!isError ? "x" : ""}</div>
                    <h2>{!!isError ? "Ups.." : "Sukces!"}</h2>
                    <h3>{!!isError ? "Coś poszło nie tak :(" : "Twoja wiadomość została wysłana :)"}</h3>
                </div>
            </ModalContainer>
        );
    }
}

export default ContactModal;