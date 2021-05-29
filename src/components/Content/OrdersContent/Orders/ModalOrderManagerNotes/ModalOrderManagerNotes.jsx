import Modal from "Common/Modal/Modal";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import React from "react";
import css from "./ModalOrderManagerNotes.module.css";

import ListContainer from "./List/ListContainer";
import NewNoteFormContainer from "./NewNoteForm/NewNoteFormContainer";

const ModalOrderManagerNotes = ({
  data,
  handleClose,
  position,
  setPosition,
  total,
  notes,
  noteIsAdding,
}) => {
  return (
    <Modal close={handleClose} className={css.modal}>
      <ModalTitle>Заметки</ModalTitle>
      <div className={css.menuLine}>
        <button
          className={[css.menuButton, position === 1 ? css.active : ""].join(
            " "
          )}
          onClick={() => setPosition(1)}
        >
          Все
          {position === 1 && (
            <div className={css.counterBadge}>{total || 0}</div>
          )}
        </button>
        <button
          className={[css.menuButton, position === 2 ? css.active : ""].join(
            " "
          )}
          onClick={() => setPosition(2)}
        >
          Покупатель
          {position === 2 && (
            <div className={css.counterBadge}>{total || 0}</div>
          )}
        </button>
        <button
          className={[css.menuButton, position === 3 ? css.active : ""].join(
            " "
          )}
          onClick={() => setPosition(3)}
        >
          Администратор
          {position === 3 && (
            <div className={css.counterBadge}>{total || 0}</div>
          )}
        </button>
      </div>
      {!!notes && <ListContainer data={data} notes={notes} />}

      <NewNoteFormContainer
        data={data}
        noteIsAdding={noteIsAdding}
        setPosition={setPosition}
      />
    </Modal>
  );
};
export default ModalOrderManagerNotes;
