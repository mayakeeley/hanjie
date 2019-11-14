import React, { Component } from "react";
import TableItem from "../TableItem/TableItem";
import styles from "./Table.module.css";

class Table extends Component {
  render() {
    let rows = 15;
    let columns = 5;
    let grid = [];
    let table = [];
    let numbers = [
      "4 2 2 4",
      "1 1 1 1 1",
      "1 4 1 4 1",
      "1 2 1 1 2 1",
      "1 1 1 1",
      "3 1 1 1 3",
      "1 1 3 1 1",
      "1 2 2 2",
      "1 1 3 1 1",
      "3 1 1 1 3",
      "1 1 1 1",
      "1 2 1 1 2 1",
      "1 4 1 4 1",
      "1 1 1 1 1",
      "4 2 2 4"
    ];
    for (let x = 0; x < columns; x++) {
      grid.push([
        <th className={styles.sideNumbers} key={x}>
          {numbers[x]}
        </th>
      ]);

      for (let y = 0; y < rows; y++) {
        grid[x].push(<TableItem key={`${x}${y}`} />);
      }
    }
    for (let i = 0; i < rows; i++) {
      table.push([<tr key={i}>{grid[i]}</tr>]);
    }
    return <tbody className={styles.table}>{table}</tbody>;
  }
}

export default Table;
