import React, { Component } from "react";
import TableItem from "../TableItem/TableItem";
import styles from "./Table.module.css";

class Table extends Component {
  render() {
    let rows = 14;
    let columns = 5;
    let grid = [];
    let table = [];
    for (let x = 0; x < columns; x++) {
      grid.push([<TableItem key={x} />]);

      for (let y = 0; y < rows; y++) {
        grid[x].push(<TableItem key={`${x}${y}`} />);
      }
    }
    for (let i = 0; i < rows; i++) {
      table.push([<tr key={`key${i}`}>{grid[i]}</tr>]);
    }
    return <tbody className={styles.table}>{table}</tbody>;
  }
}

export default Table;
