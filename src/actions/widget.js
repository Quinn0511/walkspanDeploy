import * as api from "../api/widget";
import { GET_WIDGET, GET_USER_WIDGET, ADD_USER_WIDGET } from "../constants/actions";

export function getWidget(params = {}) {
  return async (dispatch) => {
    const result = await api.getWidget(params);
    // the data type would be: 
    //"GetPartDataJson({"JSonDataFinal":{"Block":{"Nature":"1.00","Interest":"3.00","Architecture":"3.00..."
    // to remove GetPartDataJson(
    var widgetResult = JSON.parse(result.slice(16, result.length-1));
    dispatch({
      type: GET_WIDGET,
      payload: {
        address: params.address,
        scores: widgetResult.JSonDataFinal,
      },
    });
  };
}

export function addUserWidget(params = {}) {
  return async (dispatch) => {
    const widgetResult = await api.addUserWidget(params);
    dispatch({
      type: ADD_USER_WIDGET,
      payload: {
        result: widgetResult.result,
        status: widgetResult.status,
      },
    });
  };
}


export function getUserWidgetByUserID(params = {}) {
  return async (dispatch) => {
    const result = await api.getUserWidgetByID(params);
    // the data type would be: 
    //"GetPartDataJson({"JSonDataFinal":{"Block":{"Nature":"1.00","Interest":"3.00","Architecture":"3.00..."
    // to remove GetPartDataJson(
    console.log(result);
    let id = result.result[0].user_id;
    let userWidgets = Object.values(result.result);
    
    dispatch({
      type: GET_USER_WIDGET,
      payload: {
        userId: id,
        userWidget: userWidgets,
      },
    });
  };
}
