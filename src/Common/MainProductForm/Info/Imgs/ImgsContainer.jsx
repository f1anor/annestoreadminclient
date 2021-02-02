import React, { useEffect } from "react";
import Imgs from "./Imgs";
import { formValueSelector } from "redux-form";
import { connect } from "react-redux";

let selector;

const ImgsContainer = ({ form, ...props }) => {
  useEffect(() => {
    selector = formValueSelector(form);
  }, [form]);

  return <Imgs {...props} />;
};

const mapStateToProps = (state) => ({
  imgsValue: selector && selector(state, "imgs"),
});

export default connect(mapStateToProps, null)(ImgsContainer);
