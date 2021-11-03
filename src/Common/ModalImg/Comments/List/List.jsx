import React from "react";
import css from "./List.module.css";
import Item from "./Item/Item";

const List = ({ comments, ...props }) => {
  return (
    <div className={css.list}>
      {comments.map((comment) => (
        <Item key={comment._id} comment={comment} />
      ))}
    </div>
  );
};
export default List;
