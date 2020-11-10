import { GET_USER_PROFILE } from "../constants/actions";

const initState = {};

export default function reducer(state = initState, action) {
  const { status, user_profile  } = action.payload || {};
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        getProfileResult: {
          status,
          user_profile,
        }
      };

    default:
      return state;
  }
}