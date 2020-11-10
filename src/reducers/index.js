import { combineReducers } from "redux";
import widget from "./widget";
import api from "./api";
import data from "./data";
import map from "./map";
import contact from "./contact";
import login from "./login";
import register from "./register";
import user_profile from './user_profile';
import api_key from './api_key';

const rootReducer = combineReducers({
  widget,
  api,
  data,
  map,
  contact,
  login,
  register,
  user_profile,
  api_key,
});

export default rootReducer;
