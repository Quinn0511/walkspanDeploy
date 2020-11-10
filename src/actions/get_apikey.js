import * as api from "../api/apikey";
import {GET_APIKEY} from "../constants/actions";

export function getAPIKEY(params = {}){
    return async(dispatch) =>{
        console.log(params);
        const result = await api.getAPIKEY(params);
        console.log(result)
        console.log(result["result"]);
        console.log(result["result"]["0"]['access_key']);
        //var ApiKeyResult = JSON.parse(result.slice(16, result.length - 1));
        //console.log(ApiKeyResult);
        dispatch({
            type: GET_APIKEY,
            payload:{
                result: result["result"]["0"]["access_key"],
                status: result["result"]["status"],
            },
        });
    };
}