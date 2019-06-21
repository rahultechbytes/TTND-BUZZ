import {combineReducers} from 'redux';
import buzzReducer from './buzzReducer';
import complaintReducer from './complaintReducer';
import userReducer from './userReducer';
import resolveReducer from './resolveReducer';

const reducers = combineReducers({
    userReducer,
    buzzReducer,
    complaintReducer,
    resolveReducer
});

export default reducers;