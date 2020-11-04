import React from "react";
import css from "./Categories.module.css";
import Title from "../../../Common/Title/Title";
import CatList from "./CatList/CatList";
import NewCatContainer from "./NewCat/NewCatContainer";
import CatBtnsContainer from "./CatBtns/CatBtnsContainer";

const Categories = ({ cat, handleClearSelectCat, isFetching }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <Title anim={isFetching}>Категории</Title>
      </div>
      <div className="d-flex w-100 h-75 mt-5">
        <div
          className="w-100 h-100 d-flex flex-column"
          onClick={handleClearSelectCat}
        >
          <CatList cat={cat} />
          <NewCatContainer />
        </div>
        <div className={["d-flex ml-5 flex-column", css.btns].join(" ")}>
          <CatBtnsContainer />
        </div>
      </div>
    </div>
  );
};

export default Categories;
