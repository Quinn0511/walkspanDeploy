import * as api from "../api/api";
import { GET_API } from "../constants/actions";

export function getAPI(params = {}) {
  return async (dispatch) => {
    console.log(params);
    const result = await api.getAPI(params);

    
    var apiResult = JSON.parse(result.slice(16, result.length - 1));
    console.log(apiResult);
    // console.log(apiResult.JSonDataFinal);
    // console.log(apiResult.JSonDataFinal[params.areatype]["Total"]);
    // console.log(params.category, params.areatype);
    dispatch({
      type: GET_API,
      payload: {
        address: params.address,
        feature: params.category,
        scope: params.areatype,
        scores: apiResult.JSonDataFinal[params.areatype]["Total"],
        request:
          params.address + " \n" + params.category + " \n" + params.areatype,
      },
    });
  };
}
