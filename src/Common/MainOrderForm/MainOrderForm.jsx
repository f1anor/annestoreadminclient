import React from "react";
import { Field } from "redux-form";
import css from "./MainOrderForm.module.css";

import ManagerNotesContainer from "./ManagerNotes/ManagerNotesContainer";
import PaymentContainer from "./Payment/PaymentContainer";
import UserNotes from "./UserNotes/UserNotes";

import Info from "./Info/Info";

const MainOrderForm = ({ form, editMode }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.leftSide}>
        <Info formName={form} editMode={editMode} />
      </div>
      <div className={css.rightSide}>
        <PaymentContainer formName={form} />
        {/* <UserNotes /> */}
        <Field
          name="managerNotes"
          component={ManagerNotesContainer}
          editMode={editMode}
        />
      </div>
    </div>
  );
};

export default MainOrderForm;
