import axios from "axios";
import {
  GET_USER,
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  ERROR,
  SET_LOADING,
  REMOVE_CURRENT,
  SET_CURRENT,
  SEARCH_USER,
} from "../ActionTypes";

export const userDetails = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5000/contacts");
    console.log(data);
    dispatch({
      type: GET_USER,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
export const addUserDetails = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(data);
  try {
    setLoading();
    const sendData = await axios.post(
      `http://localhost:5000/contacts`,
      body,
      config
    );
    dispatch({
      type: ADD_USER,
      payload: sendData.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};

export const deleteUserDetails = (id) => async (dispatch) => {
  if (window.confirm("This Action cannot be undone")) {
    try {
      await axios.delete(`http://localhost:5000/contacts/${id}`);
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  }
};

export const editUser = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(data);
  try {
    setLoading();
    const response = await axios.patch(
      `http://localhost:5000/contacts/${data.id}`,
      body,
      config
    );
    dispatch({
      type: EDIT_USER,
      payload: response.data,
    });
    dispatch({
      type: REMOVE_CURRENT,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const setUser = (id) => (dispatch) => {
  try {
    dispatch({ type: REMOVE_CURRENT });
    dispatch({ type: SET_CURRENT, payload: id });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const searchUser = (text) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await axios.get(
      `http://localhost:5000/contacts?q=${text}`
    );
    console.log(data);
    dispatch({
      type: SEARCH_USER,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};
