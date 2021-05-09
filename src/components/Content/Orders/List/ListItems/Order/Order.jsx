import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatNumber } from "utils/utils";
import Notes from "./Notes/Notes";
import Photo from "./photo/Photo";

const Order = ({
  order,
  sum,
  status,
  allStatus,
  handleChangeStatus,
  setNote,
  setImg,
}) => {
  return (
    <tr>
      <td className="text-center">
        <Link to={`/orders/edit/${order._id}`}>
          {formatNumber(order._id, 4)}
        </Link>
      </td>
      <Photo products={order.products} setImg={setImg} />
      <td>
        {order.firstName} {order.lastName}
      </td>
      <td>{order.phone}</td>
      <td>{new Date(+order.creationDate).toLocaleString("ru")}</td>
      <td>
        {order.changeDate
          ? new Date(+order.changeDate).toLocaleString("ru")
          : " "}
      </td>
      <Notes
        userNotes={order.userNotes}
        managerNotes={order.managerNotes}
        setNote={setNote}
      />
      <td className="d-flex justify-content-center">
        <Dropdown>
          <Dropdown.Toggle
            style={{ width: "176px" }}
            size="sm"
            variant={status.variant}
            id="dropdown-basic"
          >
            {status.title}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {allStatus.map((status) => (
              <Dropdown.Item
                as="button"
                key={status.value}
                onClick={() => handleChangeStatus(status.value)}
              >
                {status.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </td>
      <td>{sum} ₽</td>
    </tr>
  );
};

export default Order;
