import React, { Component } from "react";
import styles from "./Hanjie.module.css";

class Hanjie extends Component {
  state = { color: "white" };
  handleClick = e => {
    if (e.button === 0) {
      console.log("Left click");
    } else if (e.button === 2) {
      console.log("Right click");
    }
  };
  render() {
    let rows = 14;
    let columns = 14;
    let grid = [];
    let table = [];
    for (let x = 0; x < columns; x++) {
      grid.push([<td key={x}></td>]);

      for (let y = 0; y < rows; y++) {
        grid[x].push(<td key={`${x}${y}`}></td>);
      }
    }
    for (let i = 0; i < rows; i++) {
      table.push([<tr key={`key${i}`}>{grid[i]}</tr>]);
    }

    return (
      <table
        onClick={this.handleClick}
        onContextMenu={e => {
          e.preventDefault();
          return false;
        }}
        className={styles.grid}
      >
        <tbody>
          {/* <tr>
            <th colSpan="6"></th>
          </tr>
          <tr>
            <th rowSpan="6"></th>
          </tr> */}
          {table}
        </tbody>
      </table>
    );
  }
}

export default Hanjie;
