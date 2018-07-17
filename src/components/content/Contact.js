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
        & > .text {
            margin: 5% auto;
            color: #FFFFFF;
            text-shadow: 0px 3px 6px rgba(0, 0, 0, .4);
            & > h1 {
                font-size: 40px;
                text-align: center;
                @media screen and (max-width: 550px) {
                    font-size: 20px;
                }
            }
        }
        & > .contact-form {
            position: absolute;
            width: 100%;
            margin-top: 13%;
            text-align: center;
            input[type=text], input[type=email], textarea {
                margin: 10px;
                flex-basis: 79%;
                height: 50px;
                width: 50%;
                border: 0;
                border-radius: 5px;
                box-shadow: inset 0px 4px rgba(0, 0, 0, 0.2);
                font-size: 21px;
                line-height: 40px;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
                text-align: left;
                padding-left: 15px;
                letter-spacing: 1px;
                color: #333333;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                resize: none;
            }
            input[type=submit] {
                width: 300px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                display: block;
                margin: 8px auto;
                background-color: rgba(64, 164, 196, .85);
                color: #FFFFFF;
                text-decoration: underline;
                font-size: 15px;
                border: 0;
                box-shadow: 0px 3px 6px rgba(0, 0, 0, .3);
                outline: none;
                cursor: pointer;
                &:hover {
                    transition: 0.3s all ease;
                    background-color: rgba(64, 164, 196, 1);
                }
                @media screen and (max-width: 550px) {
                    margin-top: 10%;
                }
            }
            textarea {
                height: 150px;
            }
        }
    }
`;

class Content extends Component {
    render() {
        return (
            <Background>
                <div className="mask">
                    <div className="text">
                        <h1>Skontaktuj się z nami</h1>
                    </div>
                    <form className="contact-form">
                        <input type="text" name="firstname" placeholder="Twoje imię.."/>
                        <input type="text" name="firstname" placeholder="Twoje nazwisko.."/>
                        <input type="email" name="email" placeholder="Twój email.."/>
                        <textarea name="message" placeholder="Twoja wiadomość.."/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </Background>
        );
    }
}

export default Content;