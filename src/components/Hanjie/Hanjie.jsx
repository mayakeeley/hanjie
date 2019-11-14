import React, { Component } from "react";
import styles from "./Hanjie.module.css";
import Table from "../Table/Table";

class Hanjie extends Component {
  render() {
    let header = [];
    let numbers = [
      "",
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
    for (let i = 0; i < 16; i++) {
      header.push([
        <th className={styles.topNumbers} key={i}>
          {numbers[i]}
        </th>
      ]);
    }
    return (
      <table className={styles.grid}>
        <tbody>
          <tr>{header}</tr>
        </tbody>
        <Table />
        <Table />
        <Table />
      </table>
    );
  }
}

export default Hanjie;
