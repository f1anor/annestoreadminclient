import React from "react";
import Title from "Common/Title/Title";
import css from "./Comments.module.css";
import FindContainer from "./Find/FindContainer";
import InfoContainer from "./Info/InfoContainer";
import MainTableContainer from "./MainTable/MainTableContainer";
import LayoutWrapper from "Common/LayoutWrapper/LayoutWrapper";

const Comments = ({ id, isDisabled }) => {
  return (
    <LayoutWrapper>
      <div className={css.content}>
        <Title anim={isDisabled} className={css.title}>
          Комментарии
        </Title>
        <div className={css.layout}>
          <div className={css.leftSide}>
            <InfoContainer id={id} />
            <FindContainer id={id} />
          </div>
          <div className={css.rightSide}>
            <MainTableContainer id={id} isDisabled={isDisabled} />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default Comments;
