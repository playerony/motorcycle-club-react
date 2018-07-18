import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../static/img/logo_white.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = styled.nav`
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;

    & ul {
        display: flex;
        list-style: none;
        justify-context: space-between;
        color: #fff;

        & .logo img {
            height: 120px;
            padding: 15px;

            @media screen and (max-width: 550px) {
                height: 60px;
                padding-top: 15px 15px;
            }
        }

        & .nav-right {
            position: absolute;
            top: 0;
            right: 50px;

            & .text {
                margin: 62px 20px;
                float: left;

                & .text-underline {
                    position: relative;
                    display: inline-block;
                    font-size: 24px;
                    font-weight: 400;
                    text-align: center;

                    @media screen and (max-width: 550px) {
                        font-size: 12px;
                    }
                }

                & .text-underline,
                & .text-underline:hover,
                & .text-underline:focus,
                & .text-underline:active {
                    text-decoration: none;
                }
            
                & .text-underline::after {
                    content: "";
                    position: absolute;
                }

                @media screen and (max-width: 550px) {
                    margin-top: 35px;
                }
            }

            & .text a {
                position: relative;
                color: #fff;
                text-decoration: none;
            }

            & .text .text-underline::after {
                top: 90%;
                height: 2px;
                width: 0%;
                left: 5%;
                background-color: rgba(255, 255, 255, .6);
                transition: .5s ease all .3s;
            }

            & .text:hover .text-underline::after {
                width: 90%;
                transition: .3s ease all;
            }

            @media screen and (max-width: 550px) {
                right: 15px;
            }
        }
    }
`;

class HeaderNavbar extends Component {
    render() {
        return (
            <Navbar>
                <ul className="nav">
                    <li className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </li>
                    <div className="nav-right">
                        <li className="text">
                            <AnchorLink href="#content" className="text-underline">
                                O nas
                            </AnchorLink>
                        </li>
                        <li className="text">
                            <a href="#" className="text-underline">
                                Kontakt
                            </a>
                        </li>
                    </div>
                </ul>
            </Navbar>
        );
    }
}

export default HeaderNavbar;