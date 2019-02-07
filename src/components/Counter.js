// Fn component which received props from container

import React from 'react';
import Type from 'prop-types';

const Counter = ({
    counter,
    increment,
    decrement
}) => {
    return (
        <div style={counterStyle}>
        <h3>{counter}</h3>
        <div>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
        </div>
    )
}

const counterStyle = {
    border: '1px solid #eee',
    backgroundColor: 'gold',
    boxShadow: '1px 1px 2px rgba(0,0,0,.15)',
    borderRadius: '5px',
    padding: '5px',
    margin: '0 auto',
    width: '200px',
}

Counter.defaultProps = {
    counter: 0
}

Counter.propTypes = {
    counter: Type.number,
    increment: Type.func.isRequired,
    decrement: Type.func.isRequired
}

export default Counter;
