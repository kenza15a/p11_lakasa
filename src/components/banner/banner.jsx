import React, { Component } from "react";
import "./banner.css";
class Banner extends Component {
  state = {};
  render() {
    const { title, cover } = this.props;

    return (
      <>
        <div className="banner">
          <img className="banner-bg" src={cover} alt="banner background" />
          <p className="banner-call-toaction">{title}</p>
        </div>
      </>
    );
  }
}

export default Banner;
