import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toggleLog, toggleReg } from "../actions/auth-actions";
import Main from "./Main";

const MainContainer = ({
  regSuccess,
  logSuccess,
  toggleLog,
  toggleReg,
  setImg,
  img,
}) => {
  useEffect(() => {
    if (!!regSuccess) toggleReg();
  }, [regSuccess, toggleReg]);

  useEffect(() => {
    if (!!logSuccess) toggleLog();
  }, [logSuccess, toggleLog]);

  return <Main setImg={setImg} img={img} />;
};

const mapStateToProps = (state) => ({
  regSuccess: state.auth.regSuccess,
  logSuccess: state.auth.logSuccess,
});

export default connect(mapStateToProps, {
  toggleLog,
  toggleReg,
})(MainContainer);
