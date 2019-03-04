import { GET_POLICECALLS } from './actionTypes';


export const getPoliceCalls = () => dispatch =>{
    // Dispatch to store and make aware that data is being fetched
    // fetch data
    // when data reutrns dispatch to store you have received data and send it as payloadd
    // switch to '/api/policecalls' to receive actual police call data
    fetch('/api/policecalls/dev', {
        credentials: 'include',
      }) // '/api/policecalls/dev'
        .then(data => data.json())
        .then(json => {
            console.log(json)
            dispatch({type: GET_POLICECALLS, payload: json});
        })
        .catch(err => console.log(err));
};