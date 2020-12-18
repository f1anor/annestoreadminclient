import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { initApp } from "./actions/app-actions";
import Preloader from "./Common/Preloader/Preloader";
import Layout from "./Layout";

const LayoutContainer = ({ init, initApp, ...props }) => {
  useEffect(() => {
    if (!init) initApp();
  }, [init, initApp]);

  return !!init ? <Layout {...props} /> : <Preloader />;
};

const mapStateToProps = (state) => ({
  regSuccess: state.auth.regSuccess,
  logSuccess: state.auth.logSuccess,
  auth: state.auth.auth,
  init: state.app.init,
});

export default connect(mapStateToProps, { initApp })(LayoutContainer);
