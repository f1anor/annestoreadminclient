import { toggleReg } from "actions/auth-actions";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginPage from "./LoginPage";

const LoginPageContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleReg());
  }, [dispatch]);
  return <LoginPage />;
};

export default LoginPageContainer;
