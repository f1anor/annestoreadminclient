import React, { useState } from "react";
import { connect } from "react-redux";
import { addComment } from "actions/comments-actions";
import New from "./New";

const NewContainer = ({ addComment, id, ...props }) => {
  const [checkValue, setCheck] = useState(true);
  const [areaValue, setAreaValue] = useState("");
  const [starsValue, setStarValue] = useState(0);
  const [firstName, setFirstName] = useState("");

  const handleSetStars = (val) => {
    setStarValue(val);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setAreaValue(value);
  };

  const handleCheck = () => {
    setFirstName("");
    setStarValue(0);
    setCheck(!checkValue);
  };

  const handleSend = () => {
    if (!areaValue) return;
    if (!checkValue && !starsValue && !firstName) return;
    addComment(id, {
      name: firstName,
      rate: +starsValue,
      isAdmin: checkValue,
      content: areaValue,
    });
    setAreaValue("");
    setStarValue("");
    setFirstName("");
  };

  return (
    <New
      handleChange={handleChange}
      handleCheck={handleCheck}
      handleSend={handleSend}
      handleSetStars={handleSetStars}
      checkValue={checkValue}
      areaValue={areaValue}
      starsValue={starsValue}
      firstName={firstName}
      setFirstName={setFirstName}
      {...props}
    />
  );
};

export default connect(null, { addComment })(NewContainer);
