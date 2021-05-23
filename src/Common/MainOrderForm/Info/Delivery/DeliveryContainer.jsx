import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formValueSelector } from "redux-form";
import Delivery from "./Delivery";

const DeliveryContainer = ({ formName }) => {
  const [showAdw, setShowAdw] = useState(true);

  const handleSetShowAdw = () => {
    if (!!showAdw) {
      setShowAdw(false);
    } else {
      setShowAdw(true);
    }
  };
  const method =
    useSelector((state) => formValueSelector(formName)(state, "delivery")) ||
    "1";

  return (
    <Delivery
      method={method}
      formName={formName}
      handleSetShowAdw={handleSetShowAdw}
      showAdw={showAdw}
    />
  );
};
export default DeliveryContainer;
