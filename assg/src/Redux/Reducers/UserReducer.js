import {
  GET_USER,
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  SEARCH_USER,
  SET_LOADING,
  ERROR,
  SET_CURRENT,
  REMOVE_CURRENT,

} from "../ActionTypes";

const initialState = {
  isloading: false,
  user: null,
  error: null,
  currentUser: null,
};
const detailUserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
        isloading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isloading: true,
      };
    case ADD_USER:
      return {
        ...state,
        user: [...state.user, payload],
        isloading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        user: state.user.filter((userID) => userID.id !== payload),
        isloading: false,
      };
    case EDIT_USER:
      return {
        ...state,
        user: state.user.map((ele) => (ele.id === payload.id ? payload : ele)),
      };

    case SEARCH_USER:
      return {
        ...state,
        isloading: false,
        user: payload,
      };
    case ERROR:
      return {
        ...state,
        isloading: false,
        error: payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        currentUser: state.user.filter((userID) => userID.id === payload),
        isloading: false,
      };
    case REMOVE_CURRENT:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};
export default detailUserReducer;
