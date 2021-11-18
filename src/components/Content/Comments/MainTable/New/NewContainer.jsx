import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "actions/comments-actions";
import New from "./New";
import { useQuery } from "utils/utils";

const NewContainer = ({ id, ...props }) => {
  const dispatch = useDispatch();
  const query = useQuery().toString();

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
    dispatch(
      addComment(
        id,
        {
          name: firstName,
          rate: +starsValue,
          isAdmin: checkValue,
          content: areaValue,
        },
        query
      )
    );
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

export default NewContainer;
