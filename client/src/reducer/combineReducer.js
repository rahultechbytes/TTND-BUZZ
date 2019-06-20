import {combineReducers} from 'redux';
import buzzReducer from './buzzReducer';
import complaintReducer from './complaintReducer'
import userReducer from './userReducer'

const reducers = combineReducers({
    userReducer,
    buzzReducer,
    complaintReducer
});

export default reducers;