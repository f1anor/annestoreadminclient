import Modal from "Common/Modal/Modal";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import React, { forwardRef } from "react";
import css from "./ModalOrderManagerNotes.module.css";
import NewNoteForm from "./NewNoteForm/NewNoteForm";
import { ReactComponent as Smile1Icon } from "assets/svg/smile-1.svg";
import { ReactComponent as Smile2Icon } from "assets/svg/smile-2.svg";
import { ReactComponent as Smile3Icon } from "assets/svg/smile-3.svg";
import { ReactComponent as Smile4Icon } from "assets/svg/smile-4.svg";
import { ReactComponent as Smile5Icon } from "assets/svg/smile-5.svg";

const ModalOrderManagerNotes = (
  {
    handleClose,
    position,
    setPosition,
    total,
    handleSubmit,
    notes = [],
    noteIsAdding,
  },
  ref
) => {
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
      <div className={css.notesContent} ref={ref}>
        {notes.length === 0 && (
          <div className={css.emptyMessage}>Ваше сообщение будет первым</div>
        )}
        {notes.length > 0 &&
          notes.map((item) => (
            <div key={item.date} className={css.message}>
              <div className={css.info}>Анна Иванова 10.03</div>
              <div className={css.comment}>
                {!!item.smile && (
                  <div className={css.smile}>
                    {+item.smile === 5 && <Smile1Icon />}
                    {+item.smile === 4 && <Smile2Icon />}
                    {+item.smile === 3 && <Smile3Icon />}
                    {+item.smile === 2 && <Smile4Icon />}
                    {+item.smile === 1 && <Smile5Icon />}
                  </div>
                )}
                {item.comment}
              </div>
            </div>
          ))}
      </div>
      <NewNoteForm onSubmit={handleSubmit} />
    </Modal>
  );
};
export default forwardRef(ModalOrderManagerNotes);
