import React from "react";
import { Table } from "react-bootstrap";
import List from "./List/List";

const ProductsTable = ({ value, form, editMode }) => {
  return (
    <Table borderless>
      <thead>
        <tr>
          <th className="w-50">Товар</th>
          <th className="text-center">Фото</th>
          <th className="text-center">Артикул</th>
          <th className="text-center">Цена</th>
          <th className="text-center">Количество</th>
          <th className="text-center">Стоимость</th>
          <th className="text-center">Удалить</th>
        </tr>
      </thead>
      {!!value.products && value.products.length > 0 && (
        <List form={form} value={value} editMode={editMode} />
      )}
    </Table>
  );
};

export default ProductsTable;
