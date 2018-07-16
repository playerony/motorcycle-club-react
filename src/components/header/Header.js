import React, { Component } from 'react';
import styled from 'styled-components';
import background from '../../static/img/bg.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(195, 153, 252, .4);
        display: flex;
        & > .text {
            margin: 150px auto;
            color: #FFFFFF;
            text-shadow: 0px 3px 6px rgba(0, 0, 0, .4);
            & > h1 {
                font-size: 100px;
                text-align: center;
                @media screen and (max-width: 550px) {
                    font-size: 60px;
                }
            }
            & > p {
                font-size: 30px;
                margin-top: -10px;
                text-align: center;
                @media screen and (max-width: 550px) {
                    font-size: 16px;
                }
            }
            & > .see-more-button { 
                width: 300px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                display: block;
                margin: auto;
                margin-top: 300px;
                background-color: rgba(146, 93, 217, .85);
                color: #FFFFFF;
                text-decoration: underline;
                font-size: 15px;
                border: 0;
                box-shadow: 0px 3px 6px rgba(0, 0, 0, .3);
                outline: none;
                cursor: pointer;
                &:hover {
                    transition: 0.3s all ease;
                    background-color: rgba(146, 93, 217, 1);
                }
                @media screen and (max-width: 550px) {
                    margin-top: 200px;
                }
            }
        }
    }
`;

class Header extends Component {
    render() {
        return (
            <Background>
                <div className="mask">
                    <div className="text">
                        <h1>Wojskowy klub motocyklowy</h1>
                        <p>
                            Bo pasja ma łączyć, a nie dzielić
                        </p>
                        <AnchorLink className="see-more-button" href="#description" offset="10">
                            Dowiedz się więcej
                        </AnchorLink>
                    </div>
                </div>
            </Background>
        );
    }
}

export default Header;