import React from "react";
import css from "./Categories.module.css";
import Title from "Common/Title/Title";
import CatList from "./CatList/CatList";
import Button from "Common/Button/Button";
import ModalDeleteContainer from "./ModalDelete/ModalDeleteContainer";
import ModalEditContainer from "./ModalEdit/ModalEditContainer";
import CategoriesBorderedWrapperContainer from "Common/CategoriesBorderedWrapper/CategoriesBorderedWrapperContainer";
import { ReactComponent as PrinterIcon } from "assets/svg/printer.svg";
import ModalNewCategoryContainer from "Common/ModalNewCategory/ModalNewCategoryContainer";
import LayoutWrapper from "Common/LayoutWrapper/LayoutWrapper";

const Categories = ({ activeCat, passiveCat, isBisy, handleNewModalOpen }) => {
  return (
    <LayoutWrapper>
      <div className={css.content}>
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
      <ModalNewCategoryContainer />
      <ModalDeleteContainer />
      <ModalEditContainer />
    </LayoutWrapper>
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
