import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERRORS } from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Reducer Actions goes here
  // Register a user
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users/register", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg,
      });
    }
  };

  // Clear Error
  const clearError = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register,
        clearError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
