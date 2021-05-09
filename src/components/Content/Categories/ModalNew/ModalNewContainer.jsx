import React from "react";
import { connect } from "react-redux";
import ModalNew from "./ModalNew";
import { setModalNew, addCat } from "actions/cat-actions";
import { getModalNew } from "selectors/cat-selectors";

const ModalNewContainer = ({ setModalNew, addCat, open, ...props }) => {
  const handleModalClose = () => {
    setModalNew(null);
  };

  const handleSubmit = (values) => {
    addCat(values);
  };

  return (
    <>
      {!!open && (
        <ModalNew
          handleModalClose={handleModalClose}
          onSubmit={handleSubmit}
          {...props}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  open: getModalNew(state),
});

export default connect(mapStateToProps, { setModalNew, addCat })(
  ModalNewContainer
);
