import * as api from "../api/contact";
import { ADD_CONTACT_MESSAGE } from "../constants/actions";


export function postMessage(params = {}) {
  return async (dispatch) => {
    const result = await api.postMessage(params);
    dispatch({
      type: ADD_CONTACT_MESSAGE,
      payload: {
        result: result.result,
        status: result.status,
      },
    });
  };
}
