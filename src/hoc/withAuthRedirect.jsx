import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default (Comp) => {
  class WrapperComponent extends Component {
    render() {
      const { auth } = this.props;
      if (!auth) return <Redirect to="/login" />;
      return <Comp />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth.userID,
    };
  };

  return connect(mapStateToProps, null)(WrapperComponent);
};
