import Modal from "Common/Modal/Modal";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import React from "react";
import css from "./ModalAddNote.module.css";
import { ReactComponent as CommentIcon } from "assets/svg/chat-square-dots-fill.svg";

import AddManagerNoteForm from "Common/AddManagerNoteForm/AddManagerNoteForm";

const ModalAddNote = ({ handleCloseModal, handleAddNote }) => {
  return (
    <Modal close={handleCloseModal} className={css.modal}>
      <ModalTitle icon={<CommentIcon className={css.icon} />}>
        Добавить замечание
      </ModalTitle>
      <AddManagerNoteForm onSubmit={handleAddNote} />
    </Modal>
  );
};
export default ModalAddNote;
