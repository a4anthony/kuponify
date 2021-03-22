import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { removeAlert } from "../actions/alertActions";

const Alert = () => {
  const setAlert = useSelector((state) => state.setAlert);
  const { alert } = setAlert;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!alert) {
      setTimeout(function () {
        alertRef.current.classList.add("z--1");
      }, 300);
    }
    if (alert) {
      alertRef.current.classList.remove("z--1");
      setTimeout(function () {
        dispatch(removeAlert());
      }, 5000);
    }
  }, [alert, dispatch]);

  const alertRef = useRef(null);

  return (
    <div
      ref={alertRef}
      id="alerts"
      className={
        alert
          ? "delay-50 ease-out duration-300 opacity-100 translate-y-0 sm:scale-100 "
          : "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 z--1"
      }
    >
      <div className="alert flex flex-row items-center  mb-7 bg-green-200 p-5 rounded border-b-2 border-green-300">
        <div className="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
          <span className="text-green-500">
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="alert-content ml-4">
          <div className="alert-title font-semibold text-lg text-green-800">
            Success
          </div>
          <div className="alert-description text-sm text-green-600">
            This is an alert message, alert message goes here..!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
