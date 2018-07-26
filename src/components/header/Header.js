import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HeaderNavbar from '../navbar/HeaderNavbar';
import background from '../../static/img/bg.jpg';
import './Header.scss';

class Header extends Component {
    state = {
        top: `Wojskowy Klub Motocyklowy`,
        bottom: `Rzuć wszystko i ruszaj w podróż razem z nami!`
    };

    render() {
        return (
            <div className="header-wrapper" style={{backgroundImage: `url(${background})`}}>
                <HeaderNavbar />
                <div className="header-mask">
                    <div className="header-content">
                        <h1>{this.state.top}</h1>
                        <p>
                            {this.state.bottom}
                        </p>
                        <AnchorLink className="header-content--see-more-button" href="#content" offset="20">
                            Dowiedz się więcej
                        </AnchorLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;