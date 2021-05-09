import React from "react";
import "./custom.css";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/ru";

const editorConfiguration = {
  toolbar: [
    "bold",
    "italic",
    "link",
    "undo",
    "redo",
    "numberedList",
    "bulletedList",
    "blockQuote",
  ],
  language: "ru",
};

const FormEditor = ({
  value,
  onHandleChange,
  isError,
  error,
  onBlur,
  onFocus,
}) => {
  return (
    <div
      className={["formEditorWrapper", isError ? "error" : ""].join(" ")}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        onChange={onHandleChange}
        data={value.data}
      />
      {!!isError && <span className="errorBadge">{error}</span>}
    </div>
  );
};

export default FormEditor;
