import React from "react";
import { connect } from "react-redux";
import ModalEdit from "./ModalEdit";
import { getModalEdit } from "selectors/cat-selectors";
import { setModalEdit, renameCat } from "actions/cat-actions";

const ModalEditContainer = ({ setModalEdit, renameCat, open }) => {
  const handleSubmit = (values) => {
    renameCat(open, values);
  };

  const handleCloseModal = () => {
    setModalEdit(null);
  };

  return (
    <>
      {!!open && (
        <ModalEdit
          onSubmit={handleSubmit}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  open: getModalEdit(state),
});

export default connect(mapStateToProps, { setModalEdit, renameCat })(
  ModalEditContainer
);
