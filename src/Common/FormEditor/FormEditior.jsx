import React, { useState } from "react";
import css from "./FormEditor.module.css";
import "./custom.css";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/ru";

const editorConfiguration = {
  toolbar: ["bold", "italic", "bulletedList", "numberedList", "blockQuote"],
  language: "ru",
};

const FormEditor = ({ onHandleChange }) => {
  const [value, setValue] = useState();

  const handleOnChange = (e, editor) => {
    console.log(editor.getData());
  };
  return (
    <div className={css.wrapper}>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        onChange={onHandleChange}
      />
    </div>
  );
};

export default FormEditor;
