import React, { Component } from "react";
import "./navbar.css";
import logo from "./LOGO.png";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav>
          <a href="/home">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <ul className="nav-menu">
            <li>
              <a href="/home">Accueil</a>
            </li>
            <li>
              <a href="/about">A propos</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
