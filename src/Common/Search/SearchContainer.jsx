import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "../../utils/utils";
import Search from "./Search";

const SearchContainer = ({ ...props }) => {
  const query = useQuery();
  const search = query.get("search");
  const [value, changeValue] = useState("");
  useEffect(() => {
    changeValue(search || "");
  }, [changeValue, search]);

  const history = useHistory();

  const handleSetSearch = () => {
    if (value.length === 0) {
      query.delete("search");
    } else {
      query.set("search", value);
    }
    history.push(`${history.location.pathname}?${query.toString()}`);
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13) handleSetSearch();
  };
  return (
    <Search
      value={value}
      changeValue={changeValue}
      handleSubmit={handleSubmit}
      {...props}
    />
  );
};

export default SearchContainer;
