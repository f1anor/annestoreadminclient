import React from "react";
import SessionItem from "./SessionItem/SessionItem";

const ListItems = ({ sessions }) => {
  return (
    <>
      {sessions.map((item) => (
        <SessionItem key={item._id} session={item} />
      ))}
    </>
  );
};
export default ListItems;
