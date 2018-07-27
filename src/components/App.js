import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';
import configureStore from '../configureStore';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ParallaxProvider>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                    </Switch>
                </ParallaxProvider>
            </Provider>
        )
    }
}

export default App;