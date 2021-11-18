import React from "react";
import { parseSizeTable } from "utils/utils";
import css from "./TableS.module.css";

const TableS = ({ value }) => {
  const sizesTableValue = parseSizeTable(value);
  return (
    <div className={css.sizeTable}>
      <table border="true">
        <thead>
          <tr>
            {sizesTableValue.titles.length > 1 &&
              sizesTableValue.titles.map((title, index) => (
                <th key={title + index}>{title}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {sizesTableValue.sizes.length > 0 &&
            sizesTableValue.sizes.map((item, index) => (
              <tr key={item + index}>
                {sizesTableValue.titles.length > 0 &&
                  sizesTableValue.titles.map((title, index) => (
                    <td key={title + index}>{item[title]}</td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableS;
