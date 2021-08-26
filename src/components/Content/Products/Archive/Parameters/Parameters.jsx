import React from "react";
import { Button } from "react-bootstrap";
import SearchContainer from "Common/Search/SearchContainer";
import { ReactComponent as ArrowIcon } from "assets/svg/arrow-left-circle.svg";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";
import WarningModal from "Common/WarningModal/WarningModal";

const Parameters = ({
  handleRestoreFromArchive,
  handleDeleteProducts,
  modalRestore,
  setModalRestore,
  modalDelete,
  setModalDelete,
  isProdDisabled,
  selected,
}) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <Button
          size="sm"
          variant="outline-secondary"
          onClick={() => setModalDelete(true)}
          className="mr-2"
          disabled={!selected.length || isProdDisabled}
        >
          <TrashIcon className="mr-1" />
          Удалить
        </Button>
        <Button
          size="sm"
          variant="outline-secondary"
          onClick={() => setModalRestore(true)}
          className="mr-2"
          disabled={!selected.length || isProdDisabled}
        >
          <ArrowIcon className="mr-1" />
          Восстановить
        </Button>
      </div>

      <div>
        <SearchContainer />
      </div>

      <WarningModal
        show={!!modalRestore}
        content="восстановить выбранные продукты?"
        handler={handleRestoreFromArchive}
        onHide={() => setModalRestore(null)}
      />
      <WarningModal
        show={!!modalDelete}
        content="удалить выбранные продукты?"
        handler={handleDeleteProducts}
        onHide={() => setModalDelete(null)}
      />
    </div>
  );
};

export default Parameters;
