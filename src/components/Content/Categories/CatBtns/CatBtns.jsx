import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const CatBtns = ({
  removeCat,
  selected,
  cat,
  moveUpCat,
  moveDownCat,
  selectedTitle,
  selectedNumber,
  selectedCount,
  isCatDisabled,
  isMovingUp,
  isMovingDown,
  isDeleting,
}) => {
  return (
    <>
      <Button
        disabled={!selectedNumber || selectedNumber === 1 || !!isCatDisabled}
        onClick={moveUpCat}
      >
        {!isMovingUp ? (
          "Вверх"
        ) : (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
      </Button>
      <Button
        disabled={
          !selectedNumber || selectedNumber === cat.length || !!isCatDisabled
        }
        className="mt-2"
        onClick={moveDownCat}
      >
        {!isMovingDown ? (
          "Вниз"
        ) : (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
      </Button>
      <Link
        to={`/products/all?page=1&filter=%7B%22category%22: %22${selectedTitle}%22%7D`}
        className="w-100 mt-4"
      >
        <Button
          disabled={!selected || selectedCount <= 0 || !!isCatDisabled}
          className="w-100"
        >
          Перейти
        </Button>
      </Link>
      <Button
        disabled={!selected || !!isCatDisabled}
        className="mt-5"
        variant="danger"
        onClick={removeCat}
      >
        {!isDeleting ? (
          "Удалить"
        ) : (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
      </Button>
    </>
  );
};

export default CatBtns;
