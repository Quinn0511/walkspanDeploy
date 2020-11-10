import * as api from "../api/register";
import { ADD_REGISTER } from "../constants/actions";


export function postRegister(params = {}) {
  return async (dispatch) => {
    const result = await api.postRegister(params);
    console.log(result);
    dispatch({
      type: ADD_REGISTER,
      payload: {
        result: result.result,
        status: result.status,
      },
    });
  };
}