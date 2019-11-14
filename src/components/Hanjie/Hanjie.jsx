import React, { Component } from "react";
import styles from "./Hanjie.module.css";
import Table from "../Table/Table";

class Hanjie extends Component {
  render() {
    return (
      <table className={styles.grid}>
        <Table />
        <Table />
        <Table />
      </table>
    );
  }
}

export default Hanjie;
