import { GET_API } from "../constants/actions";

const initState = {};

export default function reducer(state = initState, action) {
  const { address, feature, scope, scores, request } = action.payload || {};
  switch (action.type) {
    case GET_API:
      return {
        ...state,
        APIResult: {
          address,
          feature,
          scope,
          scores,
          request,
        },
      };

    default:
      return state;
  }
}
