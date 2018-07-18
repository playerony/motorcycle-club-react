import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { injectGlobal } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
document.getElementById('root'));

injectGlobal`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #40a4c4;
        color: #454545;
    }
`;
