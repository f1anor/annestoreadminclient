import React from "react";
import { connect } from "react-redux";
import {
  removeCat,
  moveUpCat,
  moveDownCat,
} from "../../../../actions/cat-actions";
import {
  getSelectedCount,
  getSelectedNumber,
  getSelectedTitle,
  getCatDisabled,
  getIsMovingUp,
  getIsMovingDown,
  getIsDeleting,
} from "../../../../selectors/cat-selectors";
import CatBtns from "./CatBtns";

const CatBtnsContainer = ({
  removeCat,
  moveUpCat,
  moveDownCat,
  selected,
  cat,
  selectedTitle,
  selectedNumber,
  selectedCount,
  isCatDisabled,
  isMovingUp,
  isMovingDown,
  isDeleting,
}) => {
  return (
    <CatBtns
      removeCat={removeCat}
      selected={selected}
      cat={cat}
      moveUpCat={moveUpCat}
      moveDownCat={moveDownCat}
      selectedTitle={selectedTitle}
      selectedNumber={selectedNumber}
      selectedCount={selectedCount}
      isCatDisabled={isCatDisabled}
      isMovingUp={isMovingUp}
      isMovingDown={isMovingDown}
      isDeleting={isDeleting}
    />
  );
};

const mapStateToProps = (state) => ({
  selected: state.category.selected,
  cat: state.category.cat,
  selectedNumber: getSelectedNumber(state),
  selectedTitle: getSelectedTitle(state),
  selectedCount: getSelectedCount(state),
  isCatDisabled: getCatDisabled(state),
  isMovingUp: getIsMovingUp(state),
  isMovingDown: getIsMovingDown(state),
  isDeleting: getIsDeleting(state),
});

export default connect(mapStateToProps, { removeCat, moveUpCat, moveDownCat })(
  CatBtnsContainer
);
