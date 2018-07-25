import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HeaderNavbar from '../navbar/HeaderNavbar';
import './Header.scss';

class Header extends Component {
    state = {
        top: `Z Wojskowym Klubem Motocyklowym`,
        bottom: `spędzisz niezapomniane chwile swojego życia!`
    };

    render() {
        return (
            <div className="header-wrapper">
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