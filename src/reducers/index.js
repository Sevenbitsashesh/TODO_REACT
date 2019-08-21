import {combineReducers} from 'redux';

import {todos} from '../reducers/todoreducer';

const todoApp = combineReducers(
    {todos}
)

export default todoApp;