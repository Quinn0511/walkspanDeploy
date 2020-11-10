import * as api from "../api/user_profile";
import { GET_USER_PROFILE } from "../constants/actions";

export function getUserProfile(params = {}) {
  return async (dispatch) => {
    const result = await api.getUserProfile(params);
    dispatch({
      type: GET_USER_PROFILE,
      payload: {
        user_profile: result.result,
        status: result.status,
      },
    });
  };
}
