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
    case actionTypes.CREATE_USER:
      return action.payload;
    case actionTypes.DELETE_USER:
      return state.filter((s) => s.user.id !== action.payload);
    default:
      return state;
  }
};

