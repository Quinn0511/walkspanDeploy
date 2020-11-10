import { ADD_CONTACT_MESSAGE } from "../constants/actions";

const initState = {};

export default function reducer(state = initState, action) {
  const { result, status } = action.payload || {};
  switch (action.type) {
    case ADD_CONTACT_MESSAGE:
      return {
        ...state,
        PostContactMessageResult: {
            result,
            status,
        },
      };

    default:
      return state;
  }
}