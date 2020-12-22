import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useQuery } from "../../../../../utils/utils";
import { moveToArchive, clearSelectedAll } from "actions/product-actions";
import { getProdDisabled } from "selectors/products-selectors";
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
  isProdDisabled: getProdDisabled(state),
});

export default connect(mapStateToProps, { moveToArchive, clearSelectedAll })(
  ParametersContainer
);
