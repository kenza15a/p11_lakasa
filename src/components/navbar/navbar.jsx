import React, { Component } from "react";
import "./navbar.css";
import logo from "./LOGO.png";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav>
          <a href="index.html">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <ul className="nav-menu">
            <li>
              <a href="index.html">Accueil</a>
            </li>
            <li>
              <a>A propos</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
