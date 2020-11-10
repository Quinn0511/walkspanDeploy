import { GET_APIKEY } from '../constants/actions';

const initState = {};

export default function reducer(state = initState, action){
    const {status, result} = action.payload || {};
    switch (action.type){
        case GET_APIKEY:
            return{
                ...state,
                GetApikeyResult:{
                    status,
                    result
                }
            };
        default:
            return state;
    }
}
