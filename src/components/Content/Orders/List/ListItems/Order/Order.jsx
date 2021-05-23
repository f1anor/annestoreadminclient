import React from "react";
import { Link } from "react-router-dom";
import MenuContainer from "./Menu/MenuContainer";
import Notes from "./Notes/Notes";
import css from "./Order.module.css";
import StatusContainer from "./Status/StatusContainer";
import Structure from "./Structure/Structure";

const Order = ({ order, creationDate, changeDate, id, setNote, setImg }) => {
  return (
    <tr>
      <td className="text-center">
        <Link to={`/orders/edit/${order._id}`}>#{id}</Link>
      </td>
      <td>
        <Structure products={order.products} />
      </td>
      <td>{order.name}</td>
      <td>{order.phone}</td>
      <td className={css.center}>{!!creationDate && creationDate}</td>
      <td className={css.center}>{!!changeDate && changeDate}</td>
      <td className={css.center}>{order.price} ₽</td>
      <td className={css.status}>
        <StatusContainer id={order._id} currentStatus={order.status} />
      </td>
      <td className={css.menu}>
        <MenuContainer id={order._id} />
      </td>
    </tr>
  );
};

export default Order;
