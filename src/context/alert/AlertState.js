import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import { uuid } from "uuidv4";

const AlertState = (props) => {
  const initialState = {
    alerts: [],
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Reducer Actions goes here

  // Set Alert
  const setAlert = (message, type, timeout = 5000) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { message, type, id },
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      timeout
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
