import { ADD_REGISTER } from "../constants/actions";

const initState = {};

export default function reducer(state = initState, action) {
  const { status, result  } = action.payload || {};
  switch (action.type) {
    case ADD_REGISTER:
      return {
        ...state,
        PostRegisterResult: {
          status,
          result
        }
      };

    default:
      return state;
  }
}