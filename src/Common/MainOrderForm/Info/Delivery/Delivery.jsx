import DropdownInputContainer from "Common/DropdownInput/DropdownInputContainer";
import FormBlockLabel from "Common/FormBlockLabel/FormBlockLabel";
import FormBlockLine from "Common/FormBlockLine/FormBlockLine";
import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import OpenAnim from "Common/OpenAnim/OpenAnim";

import React from "react";
import { Field } from "redux-form";
import CheckButtons from "./CheckButtons/CheckButtons";
import css from "./Delivery.module.css";

import PostContainer from "./Post/PostContainer";

const Delivery = ({
  method,
  formName,
  handleSetShowAdw,
  showAdw,
  ...props
}) => {
  return (
    <div>
      <FormBlockTitle>
        Доставка
        <button
          type="button"
          className={css.showBtn}
          onClick={handleSetShowAdw}
        >
          {!!showAdw ? "Скрыть" : "Показать"}
        </button>
      </FormBlockTitle>

      <OpenAnim isOpen={!!showAdw}>
        <CheckButtons />
        {+method === 2 && (
          <FormBlockLine double="true">
            <FormBlockLabel>
              Пункт самовывоза
              <Field name="adress" component={DropdownInputContainer} />
            </FormBlockLabel>
          </FormBlockLine>
        )}
        {+method === 1 && <PostContainer formName={formName} />}
      </OpenAnim>
    </div>
  );
};
export default Delivery;
