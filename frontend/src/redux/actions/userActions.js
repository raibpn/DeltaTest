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


export const createtUser = (users) => {
    return {
        type: actionTypes.CREATE_USER,
        payload: users,

    };
};

export const updateUsers = (users) => {
    return {
        type: actionTypes.UPDATE_USER,
        payload: users,

    };
};

export const deleteUsers = (users) => {
    return {
        type: actionTypes.DELETE_USER,
        payload: users,

    };
};
