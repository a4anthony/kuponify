import axios from "axios";

import {
  STORE_ADD_FAIL,
  STORE_ADD_REQUEST,
  STORE_ADD_SUCCESS,
  STORE_GET_FAIL,
  STORE_GET_REQUEST,
  STORE_GET_SUCCESS,
} from "../constants/storeConstants";

export const addStore = (store) => async (dispatch) => {
  try {
    dispatch({
      type: STORE_ADD_REQUEST,
    });
    const user = await axios.get("/api/cookie/get", {
      withCredentials: true,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.data.token}`,
      },
    };

    const { data } = await axios.put("/api/stores/create", { store }, config);
    dispatch({
      type: STORE_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STORE_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getStores = (stores) => async (dispatch) => {
  try {
    dispatch({
      type: STORE_GET_REQUEST,
    });
    const user = await axios.get("/api/cookie/get", {
      withCredentials: true,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.data.token}`,
      },
    };

    const { data } = await axios.get("/api/stores", config);
    dispatch({
      type: STORE_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STORE_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
