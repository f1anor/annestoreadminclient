import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import All from "./All";
import {
  fetchProducts,
  clearSelectedAll,
  deleteProducts,
  toggleAddingSuccess,
} from "actions/product-actions";
import { getProductsById, getProdDisabled } from "selectors/products-selectors";
import { useQuery } from "../../../../utils/utils";
import { useHistory } from "react-router-dom";

const AllContainer = ({
  fetchProducts,
  products,
  totalCount,
  clearSelectedAll,
  deleteProducts,
  isAddingSuccess,
  toggleAddingSuccess,
  selected,
  isProdDisabled,
}) => {
  useEffect(() => {
    if (!!isAddingSuccess) toggleAddingSuccess();
  }, [isAddingSuccess, toggleAddingSuccess]);
  const [modalImgShow, setModalImgShow] = useState(null);
  const [modalDelShow, setModalDelShow] = useState(null);

  const query = useQuery();
  const queryString = query.toString();
  const queryAfterDelete = useQuery();
  const history = useHistory();

  const pagesize = 10;

  useEffect(() => {
    fetchProducts(queryString);
  }, [fetchProducts, queryString]);

  const sort = {};

  ["time", "article", "title", "category", "views", "price"].forEach(
    (param) => {
      query.set("sort", param);
      query.set("page", 1);
      sort[param] = {};
      query.set("dir", 1);
      sort[param].up = `/products/all?${query}`;
      query.set("dir", -1);
      sort[param].down = `/products/all?${query}`;
      query.delete("dir");
    }
  );

  const handleRemoveSelection = () => {
    clearSelectedAll();
  };

  const handleDelete = () => {
    deleteProducts(queryAfterDelete, history);
  };
  return (
    <>
      {!!products && products.length > 0 && (
        <All
          products={products}
          modalImgShow={modalImgShow}
          setModalImgShow={setModalImgShow}
          modalDelShow={modalDelShow}
          setModalDelShow={setModalDelShow}
          pagesize={pagesize}
          totalCount={totalCount}
          sort={sort}
          handleRemoveSelection={handleRemoveSelection}
          handleDelete={handleDelete}
          selected={selected}
          isProdDisabled={isProdDisabled}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  products: getProductsById(state),
  totalCount: state.product.totalCount,
  currentProducts: state.product.currentProducts,
  selected: state.product.selected,
  isAddingSuccess: state.product.isAddingSuccess,
  isProdDisabled: getProdDisabled(state),
});

export default connect(mapStateToProps, {
  fetchProducts,
  clearSelectedAll,
  deleteProducts,
  toggleAddingSuccess,
})(AllContainer);
