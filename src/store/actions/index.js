// An example file with action creators

import {
    INCREMENT,
    DECREMENT
} from '../../constants/action-types';

export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
};

export const decrementCounter = () => {
    return {
        type: DECREMENT
    }
};