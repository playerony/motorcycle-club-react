import React, { Component } from 'react';
import Header from '../header/Header';
import Content from '../content/Content';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}

export default LandingPage;