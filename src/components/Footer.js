import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    background-color: #2b2b2b;
    width: 100%;
    height: 160px;

    & > .container {
        width: 80%;
        height: 100%;
        margin: 0 auto;

        & > .content--icons {
            widht: 100%;
            text-align: right;
            padding-top: 50px;

            & > .generic-anchor {
                color: #515151;
                padding: 20px;
                font-size: 30px;

                &:hover {
                    color: #fff;
                }
            }
        }

        & > h1 {
            font-weight: 500;
            font-size: 20px;
            padding: 10px 20px 10px 10px
            text-align: right;
            color: #515151;

            @media screen and (max-width: 550px) {
                font-size: 14px;
            }
        }
    }
`;

class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <div className="container">
                    <div className="content--icons">
                        <a href="#" className="generic-anchor"><i class="fa fa-facebook"></i></a>
                        <a href="#" className="generic-anchor"><i class="fa fa-instagram"></i></a>
                        <a href="#" className="generic-anchor"><i class="fa fa-youtube"></i></a>
                    </div>
                    <h1>2018 Paweł Wojtasiński</h1>
                </div>
            </StyledFooter>
        );
    }
}

export default Footer;