import React, { Component } from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = styled.nav`
    width: 99%;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;

    & ul {
        display: flex;
        list-style: none;
        justify-context: space-between;
        color: #fff;

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
                <ul>
                    <div className="nav-right">
                        <li className="text">
                            <AnchorLink href="#content" className="text-underline">
                                O nas
                            </AnchorLink>
                        </li>
                        <li className="text">
                            <AnchorLink href="#contact" className="text-underline">
                                Kontakt
                            </AnchorLink>
                        </li>
                    </div>
                </ul>
            </Navbar>
        );
    }
}

export default HeaderNavbar;