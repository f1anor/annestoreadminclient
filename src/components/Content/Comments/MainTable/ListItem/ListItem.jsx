import React from "react";
import css from "./ListItem.module.css";
import ImgPreview from "Common/ImgPreviev/ImgPreview";
import { Link } from "react-router-dom";
import StarRate from "Common/StarRate/StarRate";
import ToolsContainer from "./Tools/ToolsContainer";
import AnswerFormContainer from "./AnswerForm/AnswerFormContainer";
import { formatNumber } from "utils/utils";

const ListItem = React.memo(({ comment, id, ansId }) => {
  const date = new Date(+comment.date);

  return (
    <>
      {!!comment && (
        <div className={css.wrapper}>
          {!id && (
            <div className={css.product}>
              <ImgPreview img={comment.img} className={css.img} />
              <div>
                <h5 className={css.productTitle}>{comment.productName}</h5>
                <div className={css.article}>
                  Артикул:{" "}
                  <Link to={`/comments/${comment.article}?page=1`}>
                    #{comment.article && formatNumber(comment.article, 5)}
                  </Link>
                </div>
              </div>
            </div>
          )}
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
                  <ToolsContainer
                    id={comment._id}
                    active={comment.active}
                    admin={comment.isAdmin}
                    inAns={ansId === comment._id}
                    haveAns={comment.ans}
                  />
                </div>
              </div>
              <h5 className={css.commentTitle}>{comment.name}</h5>
            </div>
            <div className={css.commentContent}>{comment.content}</div>
            {!!comment.ans && ansId !== comment._id && (
              <div className={css.ans}>{comment.ans}</div>
            )}
            {ansId === comment._id && (
              <AnswerFormContainer commentId={comment._id} />
            )}
          </div>
        </div>
      )}
    </>
  );
});

export default ListItem;
