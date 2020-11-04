import React from "react";
import { connect } from "react-redux";
import ColorPicker from "./ColorPicker";
import { change } from "redux-form";

const ColorPickerContainer = ({ change, ...props }) => {
  const { form } = props.meta;
  const handleColorChange = (e) => {
    const target = e.target.closest("div[data-color]");
    if (!target) return;
    const color = target.getAttribute("data-color");
    if (!color) return;
    change(form, "color", color);
  };
  return <ColorPicker handleColorChange={handleColorChange} {...props} />;
};

export default connect(null, { change })(ColorPickerContainer);
