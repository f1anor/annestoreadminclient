import FormButtonMini from "Common/FormButtonMini/FormButtonMini";
import Modal from "Common/Modal/Modal";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import React, { forwardRef } from "react";
import { formatNumber } from "utils/utils";
import css from "./ModalOrderPreview.module.css";
import "./style.css";
import { ReactComponent as PrinterIcon } from "assets/svg/printer.svg";
import { ReactComponent as EditIcon } from "assets/svg/pen.svg";
import { Link } from "react-router-dom";

const ModalOrderPreview = ({ order, handleCloseModal, handlePrint }, ref) => {
  const products = order.products || [];

  const prices = products.map((item) => {
    return item.price * item.amount;
  });
  const sum = prices.reduce((sum, current) => {
    return sum + current;
  }, 0);

  let creationDate = order.creationDate ? new Date(+order.creationDate) : null;

  if (!!creationDate) {
    creationDate = `${formatNumber(creationDate.getDate(), 2)}-${formatNumber(
      creationDate.getMonth() + 1,
      2
    )}-${creationDate.getFullYear().toString()} ${formatNumber(
      creationDate.getHours(),
      2
    )}:${formatNumber(creationDate.getMinutes(), 2)}`;
  }

  return (
    <Modal
      className={css.modal}
      close={handleCloseModal}
      wrapperClassName={css.wrapper}
    >
      <div ref={ref}>
        <div className="printWrapper">
          <ModalTitle>
            Заказ #{!!order._id && formatNumber(order._id, 5)}
          </ModalTitle>

          <div className="date">{creationDate}</div>

          <h5 className="h5">Состав заказа</h5>

          <table className="tablePrint">
            <thead>
              <tr>
                <th className="center">Артикул</th>
                <th className="padding">Название</th>
                <th className="center">Цена</th>
                <th className="center">Количество</th>
                <th className="center">Стоимость</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td className="center">#{formatNumber(item.id, 5)}</td>
                  <td className="padding">{item.title}</td>
                  <td className="center">{item.price} ₽</td>
                  <td className="center">{item.amount}</td>
                  <td className="center">{item.price * item.amount} ₽</td>
                </tr>
              ))}
              <tr>
                <td className="center">Итого:</td>
                <td className="borderless"></td>
                <td className="borderless"></td>
                <td className="borderless"></td>
                <td className="center">{sum || 0} ₽</td>
              </tr>
            </tbody>
          </table>

          <h5 className="h5">Данные о покупателе</h5>

          <table className="tablePrint">
            <tbody>
              <tr>
                <td className="tableTitle">Имя</td>
                <td>{order.name || "-"}</td>
              </tr>
              <tr>
                <td className="tableTitle">Email</td>
                <td>{order.email || "-"}</td>
              </tr>
              <tr>
                <td className="tableTitle">Телефон</td>
                <td>{order.phone || "-"}</td>
              </tr>
            </tbody>
          </table>

          <h5 className="h5">Данные о доставке</h5>

          <table className="tablePrint">
            <tbody>
              <tr>
                <td className="tableTitle">Метод</td>
                <td>
                  {+order.delivery === 1 ? "Доставка почтой" : "Самовывоз"}
                </td>
              </tr>
              <tr>
                <td className="tableTitle">Адресс</td>
                <td>{order.adress || "-"}</td>
              </tr>
              {+order.delivery === 1 && (
                <tr>
                  <td className="tableTitle">Почтовый индекс</td>
                  <td>{order.postIndex || "-"}</td>
                </tr>
              )}
              {+order.delivery === 1 && (
                <tr>
                  <td className="tableTitle">Стоимость доставки</td>
                  <td>{order.deliveryPrice || "-"} ₽</td>
                </tr>
              )}
            </tbody>
          </table>

          <h5 className="h5">Иготовая сумма</h5>

          <table className="tablePrint">
            <tbody>
              <tr>
                <td className="tableTitle">Образование суммы</td>
                <td>
                  {+order.cutomPrice === 1 ? "Автоматическое" : "Вручную"}
                </td>
              </tr>
              <tr>
                <td className="tableTitle">Сумма</td>
                <td className="tableTitle">{+order.price} ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={css.btnsLine}>
        <FormButtonMini onClick={handlePrint}>
          <PrinterIcon className={css.printIcon} />
          Печать
        </FormButtonMini>
        <Link to={`/orders/editorder/${order._id}`}>
          <FormButtonMini>
            <EditIcon className={css.editIcon} />
            Редактировать
          </FormButtonMini>
        </Link>
      </div>
    </Modal>
  );
};
export default forwardRef(ModalOrderPreview);
