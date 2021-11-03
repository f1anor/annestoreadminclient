import React from "react";
import css from "./ModalImg.module.css";
import Modal from "Common/Modal/Modal";

import GalleryContainer from "./Gallery/GalleryContainer";
import CommentsContainer from "./Comments/CommentsContainer";

const ModalImg = ({ globalWrapper, img, imgs, handleClose, commentsID }) => {
  return (
    <Modal
      close={handleClose}
      className={css.modal}
      wrapperClassName={css.modalWrapper}
      ref={globalWrapper}
    >
      <GalleryContainer img={img} imgs={imgs} />
      {!!commentsID && (
        <CommentsContainer
          commentsID={commentsID}
          globalWrapper={globalWrapper}
        />
      )}
    </Modal>
  );
};

export default ModalImg;
