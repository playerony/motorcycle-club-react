import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HeaderNavbar from '../navbar/HeaderNavbar';

class Header extends Component {
    state = {
        top: `Z Wojskowym Klubem Motocyklowym`,
        bottom: `spędzisz niezapomniane chwile swojego życia!`
    };

    render() {
        return (
            <div className="container">
                <HeaderNavbar />
                <div className="mask">
                    <div className="content">
                        <h1>{this.state.top}</h1>
                        <p>
                            {this.state.bottom}
                        </p>
                        <AnchorLink className="content--see-more-button" href="#content" offset="20">
                            Dowiedz się więcej
                        </AnchorLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;