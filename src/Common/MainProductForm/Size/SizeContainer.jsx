import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";
import Size from "./Size";

let selector;

const SizeContainer = ({ form, ...props }) => {
  useEffect(() => {
    selector = formValueSelector(form);
  }, [form]);

  const [isOpen, setOpen] = useState(true);

  const handleSetOpen = () => {
    if (!!isOpen) setOpen(false);
    else setOpen(true);
  };

  return <Size handleSetOpen={handleSetOpen} isOpen={isOpen} {...props} />;
};

const mapStateToProps = (state) => ({
  sizeValue: selector && selector(state, "size"),
});

export default connect(mapStateToProps, {})(SizeContainer);
