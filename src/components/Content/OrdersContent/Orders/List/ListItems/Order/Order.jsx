import React from "react";
import MenuContainer from "./Menu/MenuContainer";
import css from "./Order.module.css";
import StatusContainer from "./Status/StatusContainer";
import Structure from "Common/Structure/Structure";

const Order = ({
  order,
  creationDate,
  handleSetModalNotes,
  id,
  handleSetImg,
  isDisabled,
}) => {
  return (
    <tr>
      <td className="text-center">#{id}</td>
      <td className={css.imgs}>
        <div>
          <Structure
            products={order.products}
            isDisabled={isDisabled}
            onClick={handleSetImg}
          />
        </div>
      </td>
      <td>{order.name}</td>
      <td>{order.phone}</td>
      <td className={css.center}>{!!creationDate && creationDate}</td>
      <td className={css.center}>
        <button
          className={css.notesBtn}
          disabled={isDisabled}
          onClick={handleSetModalNotes}
        >
          {order.managerNotes.length}
        </button>
      </td>
      <td className={css.center}>{order.price} ₽</td>
      <td className={css.status}>
        <StatusContainer
          id={order._id}
          currentStatus={order.status}
          isDisabled={isDisabled}
        />
      </td>
      <td>
        <MenuContainer id={order._id} isDisabled={isDisabled} />
      </td>
    </tr>
  );
};

export default Order;
