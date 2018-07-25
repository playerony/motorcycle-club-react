import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                <div className="content-wrapper">
                    <div className="content-icons">
                        <a href="#" className="generic-anchor"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="generic-anchor"><i className="fa fa-instagram"></i></a>
                        <a href="#" className="generic-anchor"><i className="fa fa-youtube"></i></a>
                    </div>
                    <h1>2018 Paweł Wojtasiński</h1>
                </div>
            </div>
        );
    }
}

export default Footer;