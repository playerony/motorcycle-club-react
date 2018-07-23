import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    background-color: #eee;
    width: 100%;
    height: 150px;

    & > .container {
        width: 100%;
        height: 100%;

        & > .container--main-content {
            width: 100%;
            height: 80%;

            & > .container--main-content--line {
                border-top: 2px solid #515151;
                position: relative;
                top: 50%;
                margin: 0px 20px 0px 20px;
                z-index: 0;
            }

            & > .container--main-content--social-overlap {
                background-color: #eee;
                width: 185px;
                padding: 5px;
                position: relative;
                top: 48%;
                left: 20%;
                transform: translateY(-50%);
            }

            & > .container--main-content--icons-wrapper {
                width: 320px;
                height: 40px;
                position: relative;
                background-color: #eee;
                left: 60%;
                bottom: 10%;
                font-size: 36px;
                transition: all 0.3s ease-in-out;

                & > .generic-anchor {
                    color: #515151;
                    padding: 10px;

                    &:hover {
                        color: #2b2b2b;
                    }
                }
            }
        }

        & > .container--description {
            calc(100% - 7px);
            height: 20%;
            border-top: 2px solid #515151;
            display: flex;
            align-items: center;
            padding-left: 7px;
            
            & > h1 {
                font-size: 24px;
                font-weight: 700;
                padding-left: 0%;

                @media screen and (max-width: 550px) {
                    font-size: 14px;
                }
            }
        }
    }
`;

class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <div className="container">
                    <div className="container--main-content">
                        <div className="container--main-content--line">
                        </div>
                        <div class="container--main-content--social-overlap">
                            <h1>Znajdź nas</h1>
                        </div>
                        <div className="container--main-content--icons-wrapper">
                            <a href="#" className="generic-anchor"><i class="fa fa-pinterest"></i></a>
                            <a href="#" className="generic-anchor"><i class="fa fa-facebook"></i></a>
                            <a href="#" className="generic-anchor"><i class="fa fa-twitter"></i></a>
                            <a href="#" className="generic-anchor"><i class="fa fa-instagram"></i></a>
                            <a href="#" className="generic-anchor"><i class="fa fa-youtube"></i></a>
                            <a href="#" className="generic-anchor"><i class="fa fa-google-plus"></i></a>
                        </div>
                    </div>
                    <div className="container--description">
                        <h1>Copyright © 2018 Paweł Wojtasiński</h1>
                    </div>
                </div>
            </StyledFooter>
        );
    }
}

export default Footer;