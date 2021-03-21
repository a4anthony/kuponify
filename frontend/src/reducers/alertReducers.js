import {
  REMOVE_ALERT,
  SET_ALERT,
  SET_ALERT_REQUEST,
} from "../constants/alertConstants";

export const setAlertReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ALERT_REQUEST:
      return state;
    case SET_ALERT:
      console.log(action);
      return { alert: action.payload };
    case REMOVE_ALERT:
      return { alert: action.payload };
    default:
      return state;
  }
};
