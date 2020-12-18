import React from "react";

const EmptySlots = ({ rows, cells }) => {
  const rowsArr = [];
  for (let i = 0; i < rows; i++) {
    rowsArr.push(i);
  }

  const cellsArr = [];
  for (let i = 0; i < cells; i++) {
    cellsArr.push(i);
  }

  return (
    <>
      {rowsArr.map((item) => (
        <tr key={item}>
          {cellsArr.map((cell) => (
            <td key={cell}></td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default EmptySlots;
