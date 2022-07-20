import React, { useState } from "react";
import "./gallery.css";
//import { images } from "./galleryData";
const Gallery = ({ images }) => {
  const [currImg, setCurrImg] = useState(0); //initialiser l'index de la gallerie
  const moveLeft = (currImg, tabLength) => {
    currImg > 0 ? setCurrImg(currImg - 1) : setCurrImg(tabLength - 1);
  };
  const moveRight = (currImg, tabLength) => {
    currImg < tabLength - 1
      ? setCurrImg(currImg + 1)
      : //revenir en arriere
        setCurrImg(tabLength - tabLength);
  };
  return (
    <>
      <div className="caroussel">
        <div
          className="caroussel-inner"
          style={{ backgroundImage: `url(${images[currImg]})` }}
        >
          <div
            className="left"
            onClick={() => {
              moveLeft(currImg, images.length);
            }}
          >
            <i
              //{images.length > 0 ? "right" : "right-hide"}
              className={
                images.length === 1 ? "hide" : "fa-solid fa-chevron-left"
              }
              style={{ fontSize: 60 }}
            ></i>
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              moveRight(currImg, images.length);
            }}
          >
            <i
              className={
                images.length === 1 ? "hide" : "fa-solid fa-chevron-right"
              }
              style={{ fontSize: 60 }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
