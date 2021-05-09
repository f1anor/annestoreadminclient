import React from "react";
import css from "./Categories.module.css";
import Title from "Common/Title/Title";
import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import CatList from "./CatList/CatList";
import ToolsContainer from "./Tools/ToolsContainer";
import ModalNewContainer from "./ModalNew/ModalNewContainer";
import ModalDeleteContainer from "./ModalDelete/ModalDeleteContainer";
import ModalEditContainer from "./ModalEdit/ModalEditContainer";

const Categories = ({
  activeCat,
  passiveCat,
  handleCloseModal,
  modalEdit,
  isBisy,
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <Title anim={!!isBisy} className={css.title}>
          Категории
        </Title>
        <div className={css.layout}>
          <ToolsContainer />
          <FormBlockTitle>Активные</FormBlockTitle>
          <CatList cat={activeCat} />
          <FormBlockTitle>Пустые</FormBlockTitle>
          <CatList cat={passiveCat} />
        </div>
      </div>

      {/* {!!modalEdit && (
        <Modal close={handleCloseModal}>
          <EditFormContainer id={modalEdit} />
        </Modal>
      )} */}

      <ModalNewContainer />
      <ModalDeleteContainer />
      <ModalEditContainer />
    </div>
  );
  // return (
  //   <div className={css.wrapper}>
  //     <div className={css.header}>
  //       <Title anim={isFetching}>Категории</Title>
  //     </div>
  //     <div className="d-flex w-100 h-75 mt-5">
  //       <div
  //         className="w-100 h-100 d-flex flex-column"
  //         onClick={handleClearSelectCat}
  //       >
  //         <CatList cat={cat} />
  //         <NewCatContainer />
  //       </div>
  //       <div className={["d-flex ml-5 flex-column", css.btns].join(" ")}>
  //         <CatBtnsContainer />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Categories;
