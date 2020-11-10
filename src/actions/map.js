import * as api from "../api/map";
import { GET_PLACE_RESULT } from "../constants/actions";

export function getPlaceResult(params = {}) {
  return async (dispatch) => {
    const placeResult = await api.getPlaceResult(params);
    //const { viewport } = placeResult.results[0].geometry;
    dispatch({
      type: GET_PLACE_RESULT,
      payload: {
        address: placeResult.results[0].formatted_address,
        geometry: placeResult.results[0].geometry,
        bbox:
        placeResult.results[0].geometry.viewport.southwest.lng +
          "," +
          placeResult.results[0].geometry.viewport.southwest.lat +
          "," +
          placeResult.results[0].geometry.viewport.northeast.lng +
          "," +
          placeResult.results[0].geometry.viewport.northeast.lat,
      },
    });
  };
}

export function get_WMS_Tile(params = {}) {
  return async (dispatch) => {
    const placeResult = await api.getWMSTile(params);
    
    return placeResult;
  };
}
