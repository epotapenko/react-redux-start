import React, { Component } from 'react';
import './App.css';

import CounterContainer from './containers/CounterContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi) It's a React-Redux template based on create-react-app</h1>
                <CounterContainer />
            </div>
        );
    }
}

export default App;
