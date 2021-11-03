import StarRate from "Common/StarRate/StarRate";
import React from "react";
import css from "./Item.module.css";

const Item = ({ comment, ...props }) => {
  const date = new Date(+comment.date);

  return (
    <div className={css.wrapper}>
      <div className={css.comment}>
        <div className={css.commentMeta}>
          <div className={css.infoLine}>
            <StarRate stars={comment.stars} />
            <div className={css.tools}>
              <div className={css.date}>
                {date.getDate()}/{date.getMonth()}/{date.getFullYear()}{" "}
                {date.toLocaleTimeString("ru", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              {!!comment.active ? (
                <div className={css.statusActive}>Активно</div>
              ) : (
                <div className={css.statusPending}>Ожидание</div>
              )}
            </div>
          </div>
          <h5 className={css.commentTitle}>{comment.name}</h5>
        </div>
        <div className={css.commentContent}>{comment.content}</div>
        {!!comment.ans && <div className={css.ans}>{comment.ans}</div>}
      </div>
    </div>
  );
};
export default Item;
