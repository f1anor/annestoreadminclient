import React from "react";
import { connect } from "react-redux";
import Toasts from "./Toasts";

const ToastsContainer = (props) => {
  return <Toasts {...props} />;
};

const mapStateToProps = (state) => ({
  messages: state.app.messages,
});

export default connect(mapStateToProps, null)(ToastsContainer);
