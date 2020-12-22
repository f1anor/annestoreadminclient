import React from "react";
import { connect } from "react-redux";
import Archive from "./Archive";

const ArchiveContainer = () => {
  return <Archive />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(ArchiveContainer);
