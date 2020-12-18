import React from "react";
import Toggler from "../../../../../../../Common/Toggler/Toggler";
import Avatar from "./Avatar/Avatar";

const Item = ({ admin, root, handleToggleAccess, setImg, isDisabled }) => {
  const regDate = new Date(admin.registerDate).toLocaleDateString("ru");
  const lastConnectionDate = new Date(admin.lastConnection).toLocaleDateString(
    "ru"
  );

  return (
    <tr>
      <td className="m-0 p-0 position-relative">
        <Avatar
          img={admin.ava}
          setImg={setImg}
          firstName={admin.firstName}
          lastName={admin.lastName}
        />
      </td>
      <td>
        {admin.firstName} {admin.lastName}
      </td>
      <td>{admin.email}</td>
      <td>{admin.phone}</td>
      <td>{regDate}</td>
      <td>{lastConnectionDate}</td>
      <td className="d-flex justify-content-center align-items-center h-100">
        <Toggler
          disabled={!root || !!admin.root || isDisabled}
          value={!!admin.status}
          handler={handleToggleAccess}
          className=""
        />
      </td>
    </tr>
  );
};

export default Item;
