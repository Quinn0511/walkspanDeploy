  import { GET_PLACE_RESULT} from "../constants/actions";

const initState = {};

export default function reducer(state = initState, action) {
  const { address, geometry, bbox  } = action.payload || {};
  switch (action.type) {
    case GET_PLACE_RESULT:
      return {
        ...state,
        placeResult: {
          address,
          geometry,
          bbox
        }
      };

    default:
      return state;
  }
}