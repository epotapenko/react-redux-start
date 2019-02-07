// This the component which connects to Redux store.

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    incrementCounter,
    decrementCounter
} from '../store/actions';

import Counter from '../components/Counter';

class CounterContainer extends Component {
    render() {
        const { 
            counter, 
            onIncrementCounter, 
            onDecrementCounter 
        } = this.props;

        return ( 
            <div>
                <h2>Here's a simple example:</h2>
                <Counter 
                    counter={counter} 
                    increment={onIncrementCounter}
                    decrement={onDecrementCounter}/>
            </div>
        )
    }
}

// connect app state to props

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

// connect app actionCreators to props

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(incrementCounter()),
        onDecrementCounter: () => dispatch(decrementCounter())
    }
}

// connect component to store with hoc - connect
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);