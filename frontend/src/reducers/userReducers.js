import {
  USER_INFO_FAIL,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstant";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload.user,
        token: action.payload.token,
      };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload, token: "" };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_INFO_REQUEST:
      return { loading: true, user: null };
    case USER_INFO_SUCCESS:
      return {
        loading: false,
        user: action.payload.user,
      };
    case USER_INFO_FAIL:
      return { loading: false, error: action.payload, user: null };
    case USER_LOGOUT:
      return { user: null };
    default:
      return state;
  }
};
