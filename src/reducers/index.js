import {combineReducers} from 'redux';

import {Todos} from '../reducers/todoreducer';

const todoApp = combineReducers(
    {Todos}
)

export default todoApp;