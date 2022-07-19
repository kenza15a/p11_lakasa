import React, { Component } from "react";
import "./annonceCard.css";
class AnnonceCard extends Component {
  state = {};
  render() {
    /*definr le props*/
    const { title, cover } = this.props;

    return (
      <>
        <div>
          <img src={cover} alt={cover}></img>
          <h6 className="annonce-title">{title}</h6>
        </div>
      </>
    );
  }
}

export default AnnonceCard;
