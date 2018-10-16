import React, { Component } from "react";
import logo from "../../Assets/careers-vaius-group-logo.png";
import "../../App.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    );
  }
}

export default Header;
