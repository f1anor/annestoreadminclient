import React from "react";
import { ReactComponent as ArrowIcon } from "assets/svg/arrow-left-circle.svg";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";
import TotalCounter from "Common/TotalCounter/TotalCounter";
import css from "./InfoLine.module.css";

const InfoLine = ({
  isProdDisabled,
  selected,
  totalCount,
  handleDelete,
  handleRestore,
}) => {
  return (
    <>
      <TotalCounter
        totalCount={totalCount}
        disabled={isProdDisabled}
        className={css.totalCounterLine}
        selected={selected}
      >
        {!!selected && selected.length > 0 && (
          <>
            <button className={css.btn} onClick={handleRestore}>
              <ArrowIcon />
              Восстановить
            </button>
            <button className={css.btn} onClick={handleDelete}>
              <TrashIcon />
              Удалить
            </button>
          </>
        )}
      </TotalCounter>
    </>
    // <div className="d-flex justify-content-between">
    //   <div className="d-flex">
    //     <Button
    //       size="sm"
    //       variant="outline-secondary"
    //       onClick={() => setModalDelete(true)}
    //       className="mr-2"
    //       disabled={!selected.length || isProdDisabled}
    //     >
    //       <TrashIcon className="mr-1" />
    //       Удалить
    //     </Button>
    //     <Button
    //       size="sm"
    //       variant="outline-secondary"
    //       onClick={() => setModalRestore(true)}
    //       className="mr-2"
    //       disabled={!selected.length || isProdDisabled}
    //     >
    //       <ArrowIcon className="mr-1" />
    //       Восстановить
    //     </Button>
    //   </div>

    //   <div>
    //     <SearchContainer />
    //   </div>

    //   <WarningModal
    //     show={!!modalRestore}
    //     content="восстановить выбранные продукты?"
    //     handler={handleRestoreFromArchive}
    //     onHide={() => setModalRestore(null)}
    //   />
    //   <WarningModal
    //     show={!!modalDelete}
    //     content="удалить выбранные продукты?"
    //     handler={handleDeleteProducts}
    //     onHide={() => setModalDelete(null)}
    //   />
    // </div>
  );
};

export default InfoLine;
