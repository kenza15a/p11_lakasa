import React, { Component } from "react";
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
        </div>
      </>
    );
  }
}

export default Page404;
