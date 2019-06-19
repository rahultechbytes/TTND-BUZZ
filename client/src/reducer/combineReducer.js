import {combineReducers} from 'redux';
import buzzReducer from './buzzReducer';
import complaintReducer from './complaintReducer'

const reducers = combineReducers({
    buzzReducer,
    complaintReducer
});

export default reducers;