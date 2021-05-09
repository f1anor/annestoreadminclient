import React from "react";
import Img from "./Img";
import { connect } from "react-redux";
import { change } from "redux-form";

const ImgContainer = ({ value, element, change, name, form, ...props }) => {
  const handleMoveLeft = () => {
    const index = value.findIndex((item) => item.id === element.id);

    if (!index || index === 0) return;

    const prevEl = value[index - 1];
    const prevId = prevEl.id;

    change(form, name, [
      ...value.filter((item) => item.id !== prevId && item.id !== element.id),
      {
        ...prevEl,
        id: element.id,
      },
      {
        ...element,
        id: prevId,
      },
    ]);
  };

  const handleMoveRight = () => {
    const index = value.findIndex((item) => item.id === element.id);

    if (index === value.length - 1) return;

    const nextEl = value[index + 1];
    const nextId = nextEl.id;

    change(form, name, [
      ...value.filter((item) => item.id !== nextId && item.id !== element.id),
      {
        ...nextEl,
        id: element.id,
      },
      {
        ...element,
        id: nextId,
      },
    ]);
  };

  const handleRemove = () => {
    change(form, name, [...value.filter((item) => item.id !== element.id)]);
  };

  return (
    <Img
      handleMoveLeft={handleMoveLeft}
      handleMoveRight={handleMoveRight}
      handleRemove={handleRemove}
      element={element}
      change={change}
      value={value}
      name={name}
      form={form}
      {...props}
    />
  );
};

export default connect(null, { change })(ImgContainer);
