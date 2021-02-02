import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useQuery } from "../../../../../utils/utils";
import { moveToArchive } from "actions/product-actions";
import Parametrs from "./Parametrs";

const ParametersContainer = ({ moveToArchive, ...props }) => {
  const query = useQuery();
  const history = useHistory();

  const handleMoveToArchive = () => {
    moveToArchive(query, history);
  };

  return (
    <Parametrs
      handleMoveToArchive={handleMoveToArchive}
      history={history}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  selected: state.product.selected,
});

export default connect(mapStateToProps, { moveToArchive })(ParametersContainer);
