import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  restoreFromArchive,
  deleteProducts,
  clearSelectedAll,
} from "../../../../../actions/product-actions";
import { useQuery } from "../../../../../utils/utils";
import Parameters from "./Parameters";
import { getProdDisabled } from "selectors/products-selectors";

const ParametersContainer = ({
  restoreFromArchive,
  deleteProducts,
  ...props
}) => {
  const query = useQuery();
  const history = useHistory();

  const [modalRestore, setModalRestore] = useState();
  const [modalDelete, setModalDelete] = useState();

  const handleRestoreFromArchive = () => {
    restoreFromArchive(query, history);
  };

  const handleDeleteProducts = () => {
    deleteProducts(query, history);
  };

  return (
    <Parameters
      handleRestoreFromArchive={handleRestoreFromArchive}
      handleDeleteProducts={handleDeleteProducts}
      modalRestore={modalRestore}
      modalDelete={modalDelete}
      setModalRestore={setModalRestore}
      setModalDelete={setModalDelete}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  isProdDisabled: getProdDisabled(state),
  selected: state.product.selected,
});

export default connect(mapStateToProps, {
  restoreFromArchive,
  deleteProducts,
  clearSelectedAll,
})(ParametersContainer);
