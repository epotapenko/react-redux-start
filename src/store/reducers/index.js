// The root reducer, place where we combine all app's reducers in one

import { combineReducers } from 'redux';

import counterReducer from './counter';

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;