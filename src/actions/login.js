import * as api from "../api/login";
import { ADD_LOGIN } from "../constants/actions";


export function getLogin(params = {}) {
  return async (dispatch) => {
    const result = await api.getLogin(params);
    dispatch({
      type: ADD_LOGIN,
      payload: {
        userInfo: result.userInfo,
        status: result.status,
      },
    });
  };
}