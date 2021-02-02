import React, {Component} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPageContainer from "./components/LoginPage/LoginPageContainer";

import MainContainer from "./components/MainContainer";
import RegisterPageContainer from "./components/RegisterPage/RegisterPageContainer";

const Layout = ({ regSuccess, logSuccess, auth }) => {
  return (
    <>
      <Switch>
        <Route
          path="/register"
          render={() =>
            !!regSuccess ? <Redirect to="/" /> : <RegisterPageContainer />
          }
        />
        <Route
          path="/login"
          render={() =>
            (!!auth && !!logSuccess) || !!auth ? (
              <Redirect to="/" />
            ) : (
              <LoginPageContainer />
            )
          }
        />
        <Route
          path="/"
          render={() => (!!auth ? <MainContainer /> : <Redirect to="/login" />)}
        />
      </Switch>
    </>
  );
};

export default Layout;
