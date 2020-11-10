  import { GET_WIDGET, GET_USER_WIDGET, ADD_USER_WIDGET} from "../constants/actions";

const initState = {};

export default function reducer(state = initState, action) {
  const { address, scores, userId, userWidget, result, status   } = action.payload || {};
  switch (action.type) {
    case GET_WIDGET:
      return {
        ...state,
        widgetResult: {
          address,
          scores,
        }
      };

      case GET_USER_WIDGET:
      return {
        ...state,
        userWidgetResult: {
          userId,
          userWidget,
        }
      };

      case ADD_USER_WIDGET: 
      return {
        ...state,
        addUserWidgetResult: {
          result,
          status,
        }
      }


    default:
      return state;
  }
}