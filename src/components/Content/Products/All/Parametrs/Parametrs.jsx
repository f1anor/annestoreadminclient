import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoriesContainer from "./Categories/CategoriesContainer";
import PriceFromContainer from "Common/PriceFrom/PriceFromContainer";
import PriceToContainer from "Common/PriceTo/PriceToContainer";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";
import { ReactComponent as FilterIcon } from "assets/svg/x-circle.svg";

const Parametrs = ({
  isProdDisabled,
  selected,
  handleMoveToArchive,
  clearSelectedAll,
}) => {
  return (
    <div className="d-flex">
      <Button
        variant="outline-secondary"
        size="sm"
        className="mr-2"
        disabled={!selected.length || isProdDisabled}
        onClick={handleMoveToArchive}
      >
        <TrashIcon className="mr-1" />В архив
      </Button>
      <Link to="/products/all?page=1">
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
      <CategoriesContainer isProdDisabled={isProdDisabled} />
      <PriceFromContainer isProdDisabled={isProdDisabled} />
      <PriceToContainer isProdDisabled={isProdDisabled} />
    </div>
  );
};
export default Parametrs;
