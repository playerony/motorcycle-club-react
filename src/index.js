import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/pages/LandingPage';
import { injectGlobal } from 'styled-components';

ReactDOM.render(<LandingPage />, document.getElementById('root'));

injectGlobal`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Raleway', sans-serif;
        background-color: #F8F8F8;
        color: #454545;
    }
`;
