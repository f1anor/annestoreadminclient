import React from "react";
import { connect } from "react-redux";
import { change } from "redux-form";
import StructureElement from "./StructureElement";

const StructureElementContainer = ({ element, form, name, value, change }) => {
  const total =
    value
      .map((item) => item.id !== element.id && item.value)
      .reduce((acc, currentValue) => +acc + +currentValue) || 0;
  console.log("total: ", total);

  const handleChangeName = (e) => {
    const newElement = { ...element };
    newElement.name = e.target.value;

    change(form, name, [
      ...value.filter((item) => item.id !== element.id),
      newElement,
    ]);
  };

  const handleChangeValue = (e) => {
    const newElement = { ...element };
    newElement.value = e.target.value;

    change(form, name, [
      ...value.filter((item) => item.id !== element.id),
      newElement,
    ]);
  };

  const handleRemove = () => {
    change(form, name, [...value.filter((item) => item.id !== element.id)]);
  };

  return (
    <StructureElement
      element={element}
      handleChangeName={handleChangeName}
      handleChangeValue={handleChangeValue}
      handleRemove={handleRemove}
      total={total}
    />
  );
};

export default connect(null, { change })(StructureElementContainer);
