import { ADD_LOGIN } from "../constants/actions";

const initState = {};

export default function reducer(state = initState, action) {
  const { status, userInfo  } = action.payload || {};
  switch (action.type) {
    case ADD_LOGIN:
      return {
        ...state,
        LoginResult: {
          status,
          userInfo
        }
      };

    default:
      return state;
  }
}