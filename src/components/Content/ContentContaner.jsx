import React from "react";
import { connect, useSelector } from "react-redux";
import {
  getIsProductAddingSuccess,
  getIsProductEditingSuccess,
} from "selectors/products-selectors";
import Content from "./Content";

const ContentContainer = React.memo(({ ...props }) => {
  const isProductAddingSuccess = useSelector((state) =>
    getIsProductAddingSuccess(state)
  );
  const isProductEditingSuccess = useSelector((state) =>
    getIsProductEditingSuccess(state)
  );

  return (
    <Content
      isProductAddingSuccess={isProductAddingSuccess}
      isProductEditingSuccess={isProductEditingSuccess}
      {...props}
    />
  );
});

const mapStateToProps = (state) => ({
  isAddingSuccess: state.product.isAddingSuccess,
  isEditingSuccess: state.product.isEditingSuccess,
});

export default connect(mapStateToProps, null)(ContentContainer);
