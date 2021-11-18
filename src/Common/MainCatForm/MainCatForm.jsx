import React from "react";
import { required, dontRepeatSize } from "utils/validators";
import FormBlockLabel from "Common/FormBlockLabel/FormBlockLabel";
import SizesTableInputContainer from "./SizesTableInput/SizesTableInputContainer";
import DropdownInputContainer from "Common/DropdownInput/DropdownInputContainer";
import { Field } from "redux-form";
import Input from "Common/Input/Input";
import css from "./MainCatForm.module.css";

const MainCatForm = ({ ...props }) => {
  return (
    <>
      <FormBlockLabel>
        Название
        <Field
          component={Input}
          name="title"
          autoFocus
          simple="true"
          validate={[required]}
        />
      </FormBlockLabel>
      <FormBlockLabel className={css.label}>Таблица Размеров</FormBlockLabel>
      <Field
        component={DropdownInputContainer}
        name="type"
        simple={true}
        list={[
          { title: "Нет", value: 0 },
          { title: "Стардартный", value: 1 },
          { title: "Собственнный", value: 2 },
          { title: "____________", value: "" },
        ]}
      />
      <Field
        label="Таблица размеров"
        component={SizesTableInputContainer}
        name="sizeTable"
        validate={[dontRepeatSize]}
      />
    </>
  );
};
export default MainCatForm;
