import React, { Component } from 'react';
import styled from 'styled-components';
import attachment1 from '../../static/docx/Załącznik1.docx';
import attachment2 from '../../static/docx/Załącznik2.docx';
import docxIcon from '../../static/img/docx.png'

const StyledContent = styled.div`
    background-color: #eee;
    width: 100%;
    height: 400px;

    & > .container {
        margin: auto;
        display: flex;
        justify-content: space-between;
        width: 800px;
        height: 100%;

        & > .container--file {
            width: 250px;
            height: 300px;
            background-color: #fff;
            margin: auto;
            border-top: 4px solid #40a4c4;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, .3);
            transition: 0.4s all ease-in-out;

            &:hover {
                border-top: 4px solid #515151;
                box-shadow: inset 0px 300px 0px rgba(81, 81, 81, .1),
                            0px 3px 6px rgba(0, 0, 0, .3);
            }

            & > .container--file--image {
                background: url(${docxIcon});
                width: 250px;
                height: 250px;
                background-size: cover;
                background-position: center;
                overflow: hidden;
                outline: none;
                cursor: pointer;
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
    
    @media screen and (max-width: 800px) {
        height: 800px;
    }
`;

class DownloadFilesContent extends Component {
    render() {
        return (
            <StyledContent>
                <div className="container">
                    <a href={attachment1} download="Załącznik1.docx" className="container--file">
                        <div className="container--file--image"></div>
                        <div className="container--file--text">Załącznik1.docx</div>
                    </a>
                    <a href={attachment2} download="Załącznik2.docx" className="container--file">
                    <div className="container--file--image"></div>
                        <div className="container--file--text">Załącznik2.docx</div>
                    </a>
                </div>
            </StyledContent>
        );
    }
}

export default DownloadFilesContent;