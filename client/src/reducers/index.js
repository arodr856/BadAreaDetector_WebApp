import { combineReducers } from 'redux';
import policeCallsReducer from './policeCallsReducer';

export default combineReducers(
    {
        policeCall: policeCallsReducer
    }
)