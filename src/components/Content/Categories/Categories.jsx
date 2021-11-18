import React from "react";
import css from "./Categories.module.css";
import Title from "Common/Title/Title";
import CatList from "./CatList/CatList";
import Button from "Common/Button/Button";
import ModalNewContainer from "./ModalNew/ModalNewContainer";
import ModalDeleteContainer from "./ModalDelete/ModalDeleteContainer";
import ModalEditContainer from "./ModalEdit/ModalEditContainer";
import LayoutWrapperScroll from "Common/LayoutWrapperScroll/LayoutWrapperScroll";
import CategoriesBorderedWrapperContainer from "Common/CategoriesBorderedWrapper/CategoriesBorderedWrapperContainer";
import { ReactComponent as PrinterIcon } from "assets/svg/printer.svg";

const Categories = ({ activeCat, passiveCat, isBisy, handleNewModalOpen }) => {
  return (
    <LayoutWrapperScroll>
      <div className={css.content}>
        {/* <Title anim={!!isBisy} className={css.title}>
          Категории
        </Title> */}
        <Title
          anim={!!isBisy}
          button={
            <>
              <Button extra="true">
                <PrinterIcon className={css.printIcon} />
                Экспортировать
              </Button>
              <Button onClick={handleNewModalOpen} className={css.btn}>
                Добавить
              </Button>
            </>
          }
        >
          Категории
        </Title>
        {/* <ToolsContainer /> */}
        <CategoriesBorderedWrapperContainer
          title="Активные"
          total={activeCat.length}
        >
          <CatList cat={activeCat} />
        </CategoriesBorderedWrapperContainer>
        <CategoriesBorderedWrapperContainer
          title="Пустые"
          total={passiveCat.length}
        >
          <CatList cat={passiveCat} />
        </CategoriesBorderedWrapperContainer>
      </div>

      {/* Модальные окна */}
      <ModalNewContainer />
      <ModalDeleteContainer />
      <ModalEditContainer />
    </LayoutWrapperScroll>
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
