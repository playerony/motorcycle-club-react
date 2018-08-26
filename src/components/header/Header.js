import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HeaderNavbar from '../navbar/HeaderNavbar';
import background from '../../static/img/bg.jpg';
import { Parallax } from 'react-scroll-parallax';
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
                        <Parallax
                            offsetYMax={150}
                            offsetYMin={0}
                            slowerScrollRate
                        >
                            <h1>{this.state.top}</h1>
                            <p>
                                {this.state.bottom}
                            </p>
                        </Parallax>
                        
                        <Parallax
                            offsetYMax={300}
                            offsetYMin={0}
                            slowerScrollRate
                        >
                            <AnchorLink className="header-content--see-more-button" href="#content" offset="20">
                                Dowiedz się więcej
                            </AnchorLink>
                        </Parallax>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;