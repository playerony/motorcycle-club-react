import React, { Component } from 'react';
import attachment1 from '../../static/docx/Załącznik1.docx';
import attachment2 from '../../static/docx/Załącznik2.docx';
import docxIcon from '../../static/img/docx.png'

class DownloadFilesContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <div className="content--description">
                        <h2>Pliki do pobrania</h2>
                    </div>
                    <div className="content--files">
                        <a href={attachment1} download="Załącznik1.docx" className="content--file">
                            <div className="content--file--image" style={{background: `url(${docxIcon})`}}></div>
                            <div className="content--file--text">Załącznik1.docx</div>
                        </a>
                        <a href={attachment2} download="Załącznik2.docx" className="content--file">
                        <div className="content--file--image" style={{background: `url(${docxIcon})`}}></div>
                            <div className="content--file--text">Załącznik2.docx</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default DownloadFilesContent;