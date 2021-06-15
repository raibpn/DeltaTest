import * as actionTypes from '../constants/userConstant';

export const getUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        loading: true,
        users: [],
      };
    case actionTypes.GET_USER_SUCCESS:
      return {
        users: action.payload,
        loading: false,
      };
    case actionTypes.GET_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

