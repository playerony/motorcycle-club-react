import React, { Component } from 'react';
import styled from 'styled-components';
import attachment1 from '../../static/docx/Załącznik1.docx';
import attachment2 from '../../static/docx/Załącznik2.docx';
import fileDownload from 'react-file-download';
import fetch from 'cross-fetch';

const StyledContent = styled.div`
    background-color: #eee;
    width: 100%;
    height: 600px;

    & > .container {
        margin: auto;
        display: flex;
        justify-content: space-between;
        width: 800px;
        height: 100%;

        & > .container--file {
            width: 250px;
            height: 250px;
            background-color: yellow;
            margin: auto;
        }

        @media screen and (max-width: 800px) {
            flex-direction: column;
        }
    }
`;

class DownloadFilesContent extends Component {
    handleDownloadFile = () => {
        fetch('../../static/docx/Załącznik1.docx')
            .then((response) => {
                console.log(response)

                fetch(response.url)
                    .then((response) => {
                        console.log(response)

                        fileDownload(response.data, "Załącznik1.docx");
                    });
            });
    }

    render() {
        return (
            <StyledContent>
                <div className="container">
                    <a href={attachment1} download="Załącznik1.docx" className="container--file">
                        Załącznik1
                    </a>
                    <a href={attachment2} download="Załącznik2.docx" className="container--file">
                        Załącznik2
                    </a>
                </div>
            </StyledContent>
        );
    }
}

export default DownloadFilesContent;