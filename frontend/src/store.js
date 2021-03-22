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
import { setAlertReducer } from "./reducers/alertReducers";
import { addStoreReducer, getStoresReducer } from "./reducers/storeReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userInfo: userInfoReducer,
  userRegister: userRegisterReducer,
  userVerifyEmail: userVerifyEmailReducer,
  passwordResetMail: passwordResetMailReducer,
  passwordReset: passwordResetReducer,
  setAlert: setAlertReducer,
  addStore: addStoreReducer,
  getStores: getStoresReducer,
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
