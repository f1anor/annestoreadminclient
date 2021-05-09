import FormBlock from "Common/FormBlock/FormBlock";
import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import React from "react";
import PrintNotes from "./PrintNotes/PrintNotes";
import { ReactComponent as CommentsIcon } from "assets/svg/chat-square-dots-fill.svg";
import css from "./ManagerNotes.module.css";
import FormButtonMini from "Common/FormButtonMini/FormButtonMini";

const ManagerNotes = ({ handleSetModal, notes, form, editMode }) => {
  return (
    <FormBlock>
      <FormBlockTitle>Заметки Менеджера</FormBlockTitle>
      <div className={css.content}>
        {notes.length === 0 && (
          <div className={css.label}>
            <CommentsIcon className={css.commentsIcon} />
            <div className={css.text}>Заметки отсутствуют</div>
          </div>
        )}

        {notes.length > 0 && (
          <PrintNotes notes={notes} form={form} editMode={editMode} />
        )}
      </div>

      <div className={css.btnLine}>
        <FormButtonMini type="button" onClick={handleSetModal}>
          Добавить
        </FormButtonMini>
      </div>
    </FormBlock>
  );
};

export default ManagerNotes;
