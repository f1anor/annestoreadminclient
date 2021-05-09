import React from "react";
import Tools from "./Tools";
import { setModalNew } from "actions/cat-actions";
import { connect } from "react-redux";

const ToolsContainer = ({ setModalNew }) => {
  const handleModalOpen = () => {
    setModalNew(true);
  };

  return <Tools handleModalOpen={handleModalOpen} />;
};

export default connect(null, { setModalNew })(ToolsContainer);
