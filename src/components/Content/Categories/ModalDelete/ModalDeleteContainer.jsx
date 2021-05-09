import React from "react";
import { connect } from "react-redux";
import ModalDelete from "./ModalDelete";
import { getModalDelete } from "selectors/cat-selectors";
import { setModalDelete, removeCat } from "actions/cat-actions";

const ModalDeleteContainer = ({ open, setModalDelete, removeCat }) => {
  const handleCloseModal = () => {
    setModalDelete(null);
  };

  const handleRemove = () => {
    removeCat(open.num);
  };
  return (
    <>
      {!!open && (
        <ModalDelete
          handleCloseModal={handleCloseModal}
          handleRemove={handleRemove}
          name={open.name}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  open: getModalDelete(state),
});

export default connect(mapStateToProps, { setModalDelete, removeCat })(
  ModalDeleteContainer
);
