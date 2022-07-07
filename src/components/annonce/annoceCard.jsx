import React, { Component } from "react";
import "./annonceCard.css";
class AnnonceCard extends Component {
  state = {};
  render() {
    /*definr le props*/
    const title = this.props.title;
    const cover = this.props.cover;

    return (
      <>
        <div className="annonce">
          <img src={cover} alt={cover}></img>
          <h6>{title}</h6>
        </div>
      </>
    );
  }
}
/*<img
            className="annonce-pic "
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            alt="anonce"
          ></img>*/

export default AnnonceCard;
