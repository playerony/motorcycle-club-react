import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../static/img/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HeaderNavbar from '../navbar/HeaderNavbar';

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: red;
    background: url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-449172.jpg);
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
        background-color: rgba(0, 0, 255, .2);
        display: flex;

        & > .text {
            color: #FFFFFF;
            text-shadow: 0px 3px 6px rgba(0, 0, 0, 1);
            margin: auto;
            cursor: default;

            & > h1 {
                font-size: 50px;
                text-align: center;
                margin-top: 15%;
                font-weight: 800;
                text-shadow: 4px 4px rgba(0, 0, 255, .5);

                @media screen and (max-width: 550px) {
                    font-size: 25px;
                    margin-top: 40%;
                }
            }

            & > p {
                font-size: 27px;
                text-align: center;
                font-weight: 400;
                color: rgba(0, 0, 255, .6);
                text-shadow: none;

                @media screen and (max-width: 550px) {
                    font-size: 16px;
                    margin-top: 10px;
                }
            }

            & > .see-more-button { 
                text-decoration: none;
                display: block;
                border: 1px solid #fff;
                text-align: center;
                font-size: 14px;
                background-color: rgba(0, 0, 0, 0);
                color: #fff;
                outline: none;
                margin: 20% auto;
                transition: all 0.2s ease-in-out;
                vertical-align: middle;
                line-height: 50px;
                width: 300px;
                border-radius: 100px;

                &:hover {
                    background-color: rgba(255, 255, 255, .15);
                }

                @media screen and (max-width: 550px) {
                    margin-top: 10%;
                }
            }

            & > .logo {
                margin-top: 20%;
                display: flex;
                margin: 0 auto;
                width: 50%;
                background: url(${logo});
                width: 300px;
                height: 300px;
                background-size: cover;
                background-position: center;
                cursor: pointer;
                
                @media screen and (max-width: 800px) {
                    margin: 10% auto;
                }
            }

            @media screen and (min-width: 1000px, min-height: 1000px) {
                margin: 40% auto;
            }

            @media screen and (min-width: 1000px, max-height: 1000px) {
                margin: -10% auto;
            }

            @media screen and (min-width: 1000px) {
                margin: 10% auto;
            }
        }
    }
`;

class Header extends Component {
    state = {
        top: `Z Wojskowym Klubem Motocyklowym`,
        bottom: `spędzisz niezapomniane chwile swojego życia!`
    };

    render() {
        return (
            <Background>
                <HeaderNavbar />
                <div className="mask">
                    <div className="text">
                        <h1>{this.state.top}</h1>
                        <p>
                            {this.state.bottom}
                        </p>
                        <AnchorLink className="see-more-button" href="#content" offset="10">
                            Dowiedz się więcej
                        </AnchorLink>
                    </div>
                </div>
            </Background>
        );
    }
}

export default Header;