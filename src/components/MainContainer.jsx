import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { getSidebarType } from "selectors/app-selectors";
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
  const sidebarType = useSelector((state) => getSidebarType(state));

  useEffect(() => {
    if (!!regSuccess) toggleReg();
  }, [regSuccess, toggleReg]);

  useEffect(() => {
    if (!!logSuccess) toggleLog();
  }, [logSuccess, toggleLog]);

  return <Main setImg={setImg} img={img} sidebarType={sidebarType} />;
};

const mapStateToProps = (state) => ({
  regSuccess: state.auth.regSuccess,
  logSuccess: state.auth.logSuccess,
});

export default connect(mapStateToProps, {
  toggleLog,
  toggleReg,
})(MainContainer);
