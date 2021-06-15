import * as actionTypes from "../constants/userConstant";
import axios from "axios";


export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_USERS });

    const { data } = await axios.get("/api/users");

    dispatch({
      type: actionTypes.GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeUser = () => (dispatch) => {
  dispatch({ type: actionTypes.DELETE_USER });
};