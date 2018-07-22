import React, { Component } from 'react';
import styled from 'styled-components';
import attachment1 from '../../static/docx/Załącznik1.docx';
import attachment2 from '../../static/docx/Załącznik2.docx';
import docxIcon from '../../static/img/docx.png'

const StyledContent = styled.div`
    background-color: #eee;
    width: 100%;
    height: 520px;

    & > .container {
        margin: auto;
        width: 800px;
        height: 100%;

        & > .container--description {
            text-align: center;
            background: #FFFFFF;
            padding: 15px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, .3);
            height: 40px;
            width: 50%;
            margin: 0 auto;
            position: relative;
            bottom: 20px;
        }

        & > .container--files {
            margin-top: 40px;
            width: 100%;
            display: flex;

            & > .container--file {
                width: 250px;
                height: 300px;
                background-color: #fff;
                margin: auto;
                border-top: 8px solid #40a4c4;
                box-shadow: 0px 3px 6px rgba(0, 0, 0, .3);
                transition: 0.4s all ease-in-out;

                &:hover {
                    border-top: 8px solid #515151;
                    box-shadow: inset 0px 300px 0px rgba(81, 81, 81, .05),
                                0px 3px 6px rgba(0, 0, 0, .3);
                }

                & > .container--file--image {
                    background: url(${docxIcon});
                    width: 250px;
                    height: 230px;
                    background-size: cover;
                    background-position: center;
                    overflow: hidden;
                    outline: none;
                    cursor: pointer;
                    margin-top: 20px;
                }

                & > .container--file--text {
                    height: 50px;
                    line-height: 50px;
                    width: 100%;
                    text-align: center;
                    color: #515151;
                    display:inline-block;
                    text-decoration: none;
                    font-weight: 700;
                }
            }

            @media screen and (max-width: 800px) {
                flex-direction: column;
            }
        }
    }
    
    @media screen and (max-width: 800px) {
        height: 800px;
    }
`;

class DownloadFilesContent extends Component {
    render() {
        return (
            <StyledContent>
                <div className="container">
                    <div className="container--description">
                        <h1>Pliki do pobrania</h1>
                    </div>
                    <div className="container--files">
                        <a href={attachment1} download="Załącznik1.docx" className="container--file">
                            <div className="container--file--image"></div>
                            <div className="container--file--text">Załącznik1.docx</div>
                        </a>
                        <a href={attachment2} download="Załącznik2.docx" className="container--file">
                        <div className="container--file--image"></div>
                            <div className="container--file--text">Załącznik2.docx</div>
                        </a>
                    </div>
                </div>
            </StyledContent>
        );
    }
}

export default DownloadFilesContent;