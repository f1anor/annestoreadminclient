import React from "react";
import { connect } from "react-redux";
import AddProduct from "./AddProduct";

const AddProductContainer = () => {
  return <AddProduct />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(AddProductContainer);
