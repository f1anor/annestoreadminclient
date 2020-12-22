import React from "react";
import { Button } from "react-bootstrap";
import SearchContainer from "Common/Search/SearchContainer";
import { ReactComponent as ArrowIcon } from "assets/svg/arrow-left-circle.svg";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";
import { ReactComponent as FilterIcon } from "assets/svg/x-circle.svg";
import WarningModal from "../../../../../Common/WarningModal/WarningModal";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PriceFromContainer from "Common/PriceFrom/PriceFromContainer";
import PriceToContainer from "Common/PriceTo/PriceToContainer";

const Parameters = ({
  handleRestoreFromArchive,
  handleDeleteProducts,
  modalRestore,
  setModalRestore,
  modalDelete,
  setModalDelete,
  isProdDisabled,
  selected,
  clearSelectedAll,
}) => {
  return (
    <div className="d-flex justify-content-between mb-4">
      <div>
        <SearchContainer />
      </div>
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
        <Link to="/products/archive?page=1">
          <Button
            size="sm"
            variant="outline-secondary"
            disabled={isProdDisabled}
            onClick={clearSelectedAll}
          >
            <FilterIcon className="mr-1" />
            Сбросить
          </Button>
        </Link>
        <PriceFromContainer isProdDisabled={isProdDisabled} />
        <PriceToContainer isProdDisabled={isProdDisabled} />
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
