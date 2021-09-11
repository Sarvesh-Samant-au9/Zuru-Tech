import { combineReducers } from "redux";
import userDetail from "../Reducers/UserReducer";
export default combineReducers({
  user: userDetail,
});
