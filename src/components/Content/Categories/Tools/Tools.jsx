import React from "react";
import css from "./Tools.module.css";
import SearchContainer from "Common/Search/SearchContainer";
import Modal from "Common/Modal/Modal";
import { ReactComponent as PlusIcon } from "assets/svg/plus-circle-fill.svg";

const Tools = ({ newModal, handleModalOpen }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.searchWrapper}>
        <SearchContainer
          placeholder="Поиск по категориям..."
          className={css.input}
        />
      </div>
      <button className={css.btn} onClick={handleModalOpen}>
        <PlusIcon />
        Новая
      </button>
    </div>
  );
};

export default Tools;
