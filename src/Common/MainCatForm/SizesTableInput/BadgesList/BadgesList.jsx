import DragndropWrapper from "Common/DragndropWrapper/DragndropWrapper";
import React from "react";
import css from "./BadgesList.module.css";

const BadgesList = ({ value, handleMoveSuccess, handleDelete }) => {
  return (
    <DragndropWrapper handleMoveSuccess={handleMoveSuccess}>
      <div className={css.badgeWrapper}>
        {value.length > 0 &&
          value.map((item, index) => (
            <div className={css.badge} key={item + index} data-dragndrop={item}>
              {item}
              <button
                className={css.delete}
                type="button"
                onClick={() => handleDelete(index)}
              >
                &times;
              </button>
            </div>
          ))}
      </div>
    </DragndropWrapper>
  );
};
export default BadgesList;
