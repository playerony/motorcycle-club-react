import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './HeaderNavbar.scss';

class HeaderNavbar extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <ul>
                    <div className="nav-right">
                        <li className="nav-right--text">
                            <AnchorLink href="#content" className="nav-right--text-underline">
                                O nas
                            </AnchorLink>
                        </li>
                        <li className="nav-right--text">
                            <AnchorLink href="#gallery" className="nav-right--text-underline">
                                Galeria
                            </AnchorLink>
                        </li>
                        <li className="nav-right--text">
                            <AnchorLink href="#contact" className="nav-right--text-underline">
                                Kontakt
                            </AnchorLink>
                        </li>
                    </div>
                </ul>
            </div>
        );
    }
}

export default HeaderNavbar;