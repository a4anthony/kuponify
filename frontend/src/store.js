import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  passwordResetMailReducer,
  passwordResetReducer,
  userInfoReducer,
  userLoginReducer,
  userRegisterReducer,
  userVerifyEmailReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userInfo: userInfoReducer,
  userRegister: userRegisterReducer,
  userVerifyEmail: userVerifyEmailReducer,
  passwordResetMail: passwordResetMailReducer,
  passwordReset: passwordResetReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

let initialState = {
  userInfo: { user: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
