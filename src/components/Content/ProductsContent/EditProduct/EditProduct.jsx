import LayoutWrapperScroll from "Common/LayoutWrapperScroll/LayoutWrapperScroll";
import React from "react";
import EditFormContainer from "./EditForm/EditFormContainer";

const EditProduct = ({ ...props }) => {
  return (
    <LayoutWrapperScroll>
      <EditFormContainer {...props} />
    </LayoutWrapperScroll>
  );
};

export default EditProduct;
