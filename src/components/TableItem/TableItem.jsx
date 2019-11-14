import React, { Component } from "react";
import styles from "./TableItem.module.css";

class TableItem extends Component {
  state = { isSelected: false };
  handleClick = () => {
    this.setState({ isSelected: !this.state.isSelected });
  };
  render() {
    let color;
    this.state.isSelected ? (color = styles.black) : (color = styles.white);
    return <td className={color} onClick={this.handleClick}></td>;
  }
}

export default TableItem;
