import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./page404.css";
class Page404 extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="error">
          <p className="error-code">404</p>
          <p className="error-text">
            Oups! La page que vous demandez n'existe pas
          </p>
          <Link className="back-home" to="/home">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </>
    );
  }
}

export default Page404;
