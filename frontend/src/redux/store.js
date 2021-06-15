import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { getUsersReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  user: getUsersReducer,
  getUsers: getUsersReducer
});

const middleware = [thunk];

const usersInLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];

const INITIAL_STATE = {
  cart: {
    usertItems: usersInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;