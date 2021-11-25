import LayoutWrapper from "Common/LayoutWrapper/LayoutWrapper";

import React from "react";
import EditFormContainer from "./EditForm/EditFormContainer";

const EditProduct = ({ ...props }) => {
  return (
    <LayoutWrapper>
      <EditFormContainer {...props} />
    </LayoutWrapper>
  );
};

export default EditProduct;
