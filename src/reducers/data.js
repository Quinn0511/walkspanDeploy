import { GET_DATA } from "../constants/actions";

const initState = {};

export default function reducer(state = initState, action) {
  const { city, category, areatype, score, areaname, latitude, longitude } = action.payload || {};
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        DATAResult: {
          city,
          category,
          areatype,
          score,
          areaname,
          latitude,
          longitude,
        },
      };

    default:
      return state;
  }
}