import {
  REMOVE_ALERT,
  SET_ALERT,
  SET_ALERT_REQUEST,
} from "../constants/alertConstants";
import store from "../store";

export const setAlert = (alert) => (dispatch) => {
  dispatch({
    type: SET_ALERT_REQUEST,
  });
  console.log(alert);
  dispatch({
    type: SET_ALERT,
    payload: alert,
  });
};

export const removeAlert = () => (dispatch) => {
  dispatch({
    type: SET_ALERT_REQUEST,
  });
  dispatch({
    type: REMOVE_ALERT,
    payload: null,
  });
};
