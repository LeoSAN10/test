import "./styles.css";
import React, { useState } from "react";

const Table = ({ data, column }) => {
  const [selectedRow, setSelectedRow] = useState(0);
  const selectRow = (e) => {
    if (
      e.target.parentElement.style.backgroundColor === "yellow" &&
      String(e.target.parentElement) === `[object HTMLTableRowElement]`
    ) {
      e.target.parentElement.style.backgroundColor = "white";
      e.target.style.backgroundColor = "white";
      e.target.style.color = "black";
      setSelectedRow(selectedRow - 1);
    } else if (
      String(e.target.parentElement) === `[object HTMLTableCellElement]`
    ) {
    } else {
      e.target.parentElement.style.backgroundColor = "yellow";
      e.target.style.backgroundColor = "yellow";
      e.target.style.color = "black";
      setSelectedRow(selectedRow + 1);
    }
  };

  return (
    <div>
      <div>
        selected rows: {selectedRow}, all cells: {data.length}
      </div>
      <table>
        <thead>
          <tr>
            {column.map((item, index) => (
              <TableHeadItem item={item} />
            ))}
          </tr>
        </thead>
        <tbody onClick={selectRow}>
          {data.map((item, index) => (
            <TableRow item={item} column={column} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const editRow = (e) => {
  e.preventDefault();
  const td = e.target;
  const input = document.createElement("input");
  input.value = td.innerHTML;
  td.innerHTML = "";
  td.appendChild(input);

  input.addEventListener("blur", function () {
    td.innerHTML = this.value;
  });
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split(".");
        return <td onClick={editRow}>{item[itemSplit[0]][itemSplit[1]]}</td>;
      }

      return <td onClick={editRow}>{item[`${columnItem.value}`]}</td>;
    })}
  </tr>
);

export default Table;
