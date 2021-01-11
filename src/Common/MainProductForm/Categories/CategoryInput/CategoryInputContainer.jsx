import React from "react";
import { connect } from "react-redux";
import { change } from "redux-form";
import CategoryInput from "./CategoryInput";

const CategoryInputContainer = ({
  change,
  input: { name, value },
  meta: { form },
  ...props
}) => {
  const handleSelect = (catTitle) => {
    if (!!value.find((item) => item === catTitle)) {
      change(
        form,
        name,
        value.filter((item) => item !== catTitle)
      );
    } else {
      change(form, name, [...value, catTitle]);
    }
  };

  return <CategoryInput value={value} handleSelect={handleSelect} {...props} />;
};

export default connect(null, { change })(CategoryInputContainer);
