import {
  STORE_ADD_FAIL,
  STORE_ADD_REQUEST,
  STORE_ADD_SUCCESS,
  STORE_GET_FAIL,
  STORE_GET_REQUEST,
  STORE_GET_SUCCESS,
} from "../constants/storeConstants";

export const addStoreReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_ADD_REQUEST:
      return { loading: true };
    case STORE_ADD_SUCCESS:
      return { loading: false, stores: action.payload, success: true };
    case STORE_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getStoresReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case STORE_GET_REQUEST:
      return { loading: true };
    case STORE_GET_SUCCESS:
      return { loading: false, stores: action.payload, success: true };
    case STORE_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
