import React, { Component } from 'react';
import Header from '../header/Header';
import Content from '../content/Content';
import Contact from '../content/Contact';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Contact />
            </div>
        );
    }
}

export default LandingPage;