import React from "react";
import css from "./CatList.module.css";
import ListItemContainer from "./ListItem/ListItemContainer";

const CatList = ({ cat }) => {
  return (
    <div className={css.wrapper}>
      {cat
        .sort((a, b) => a.number - b.number)
        .map((item, index) => (
          <ListItemContainer
            key={item.number}
            category={item}
            first={index === 0}
            last={index === cat.length - 1}
          />
        ))}
    </div>
  );
};

export default CatList;
