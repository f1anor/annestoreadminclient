import React from "react";
import { ModalTitle } from "react-bootstrap";
import css from "./Comments.module.css";
import List from "./List/List";
import { ReactComponent as PreloaderAnim } from "assets/svg/preloader2.svg";

const Comments = ({ isFetching, comments, ...props }) => {
  return (
    <div className={css.wrapper}>
      <ModalTitle>Комментарии</ModalTitle>
      <List comments={comments} />
      {!!isFetching && (
        <div className={css.animContainer}>
          <PreloaderAnim className={css.preloader} />
        </div>
      )}
    </div>
  );
};
export default Comments;
