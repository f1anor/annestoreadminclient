import React from "react";
import { ListGroup, InputGroup, Badge } from "react-bootstrap";
import css from "./Cat.module.css";

const Cat = ({ item, selectCat, selected }) => {
  let variant = "secondary";
  if (item.count > 0) {
    variant = "info";
  } else if (item.count > 3) {
    variant = "success";
  } else if (item.count > 5) {
    variant = "primary";
  } else if (item.count > 10) {
    variant = "warning";
  } else if (item.count > 20) {
    variant = "danger";
  }

  const sel = item._id === selected;

  return (
    <ListGroup.Item
      variant={!!sel ? "warning" : ""}
      action
      className={[
        "d-flex w-100 align-items-center justify-content-between",
        css.listItem,
      ].join(" ")}
      onClick={() => selectCat(item._id)}
    >
      <div className="d-flex align-items-center">
        <InputGroup.Text id="basic-addon1" className="mr-2">
          {item.number}
        </InputGroup.Text>
        {item.title}
      </div>
      <Badge variant={variant}>{item.count}</Badge>
    </ListGroup.Item>
  );
};

export default Cat;
