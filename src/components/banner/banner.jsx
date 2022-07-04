import React, { Component } from "react";
import bannerBg from "./IMG.png";
import "./banner.css";
class Banner extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="banner">
          <img className="banner-bg" src={bannerBg} alt="banner background" />
          <h1>Chez vous, partout</h1>
        </div>
      </>
    );
  }
}

export default Banner;
