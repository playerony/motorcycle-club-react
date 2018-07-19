import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                    </Switch>
                </div>
            </Provider>
        )
    }
}

export default App;