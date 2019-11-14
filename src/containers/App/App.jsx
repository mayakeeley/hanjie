import React, { Component } from "react";
import firebase, { provider } from "../../firebase";
import "./App.css";
import Hanjie from "../../components/Hanjie/Hanjie";

class App extends Component {
  state = { name: null };

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        this.setState({ name: user.displayName });
      });
  };
  render() {
    const welcome =
      this.state.name !== null ? (
        <p>Welcome, {this.state.name}!</p>
      ) : (
        <button onClick={this.signIn}>Login</button>
      );
    return (
      <div className="App">
        {welcome}
        <header className="App-header">Hanjie</header>
        <Hanjie />
      </div>
    );
  }
}

export default App;
