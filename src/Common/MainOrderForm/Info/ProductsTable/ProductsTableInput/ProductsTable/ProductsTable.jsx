import React from "react";
import { Table } from "react-bootstrap";
import ListContainer from "./List/ListContainer";

const ProductsTable = ({ value, form, editMode, delivery }) => {
  return (
    <Table borderless>
      <thead>
        <tr>
          <th className="w-50">Товар</th>
          <th className="text-center">Фото</th>
          <th className="text-center">Артикул</th>
          <th className="text-center">Цена</th>
          <th className="text-center">Количество</th>
          <th className="text-center">Удалить</th>
          <th className="text-center">Стоимость</th>
        </tr>
      </thead>
      <ListContainer form={form} value={value || []} editMode={editMode} />
    </Table>
  );
};

export default ProductsTable;
