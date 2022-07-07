import React, { Component } from "react";
import "./footer.css";
import footer_bg from "./logo_footer.png";
class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="footer">
          <img src={footer_bg} alt="logo footer lakasa" />
          <p className="rights">© 2020 Kasa. All rights reserved</p>
        </div>
      </>
    );
  }
}

export default Footer;
