import {GET_POLICECALLS, UPDATE_REFRESH, TOGGLE_LIVE, FILTERED_DATA} from '../actions/actionTypes';

const initialState = {
    policeCall:[],
    loading: false,
    refreshValue: 5,
    liveToggled: true,
    startDate: null,
    endDate: null,
    filteredData: null
}

const policeCallsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POLICECALLS:
            return {...state, policeCall: action.payload, loading: false};
        case UPDATE_REFRESH:
            return {...state, refreshValue: action.payload};
        case TOGGLE_LIVE:
            return { ...state, liveToggled: !state.liveToggled };
        case FILTERED_DATA:
            return { ...state, filteredData: action.payload };
        default:
            return state;
    }
}

export default policeCallsReducer;