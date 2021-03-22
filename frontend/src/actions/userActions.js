import axios from "axios";

import {
  USER_INFO_FAIL,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PASSWORD_RESET_FAIL,
  USER_PASSWORD_RESET_MAIL_FAIL,
  USER_PASSWORD_RESET_MAIL_REQUEST,
  USER_PASSWORD_RESET_MAIL_SUCCESS,
  USER_PASSWORD_RESET_REQUEST,
  USER_PASSWORD_RESET_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_VERIFY_EMAIL_FAIL,
  USER_VERIFY_EMAIL_REQUEST,
  USER_VERIFY_EMAIL_SUCCESS,
} from "../constants/userConstant";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    await axios.get(`/api/cookie/set?token=${data.token}`, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_INFO_REQUEST,
    });
    dispatch({
      type: USER_INFO_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const user = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_INFO_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/cookie/get`, config);
    dispatch({
      type: USER_INFO_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  await axios.get(`/api/cookie/delete`, config);
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/register",
      { name, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    await axios.get(`/api/cookie/set?token=${data.token}`, config);

    dispatch({
      type: USER_INFO_REQUEST,
    });

    dispatch({
      type: USER_INFO_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const verifyEmail = (email, token) => async (dispatch) => {
  try {
    dispatch({
      type: USER_VERIFY_EMAIL_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/email-verification",
      { email, token },
      config
    );

    dispatch({
      type: USER_VERIFY_EMAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_VERIFY_EMAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const passwordResetMail = (email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_PASSWORD_RESET_MAIL_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/password-reset",
      { email },
      config
    );

    dispatch({
      type: USER_PASSWORD_RESET_MAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_PASSWORD_RESET_MAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const passwordReset = (email, token, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_PASSWORD_RESET_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      "/api/users/password-reset",
      { email, token, password },
      config
    );

    dispatch({
      type: USER_PASSWORD_RESET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_PASSWORD_RESET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
