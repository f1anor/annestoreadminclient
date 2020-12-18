import React from "react";
import ItemContainer from "./Item/ItemContainer";

const ListItems = ({ admins }) => {
  return (
    <>
      {admins.map((admin) => (
        <ItemContainer key={admin._id} admin={admin} />
      ))}
    </>
  );
};

export default ListItems;
