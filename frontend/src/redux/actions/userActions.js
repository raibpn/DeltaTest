import * as actionTypes from "../constants/userConstant";
import axios from "axios";

//Get users
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


//Create user
export const createUser = (postData) => async (dispatch) => {
  const user = [];
  fetch("/users/create", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => user.push(res))
    .then(
      dispatch({
        type: actionTypes.CREATE_USER,
        payload: user,
      })
    );
};

//update
export const updateUser = (id, user) => async (dispatch) => {
  try {
    const { data } = await axios.updateUser(id, user);

    dispatch({ type: actionTypes.UPDATE_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


//delete user
export const deleteUser = (user_id) => async (dispatch) => {
  await axios
    .delete(`/news/delete/${user_id}`)
    .then((res) => res)
    .then(
      dispatch({
        type: actionTypes.DELETE_USER,
        payload: user_id,
      })
    );
};