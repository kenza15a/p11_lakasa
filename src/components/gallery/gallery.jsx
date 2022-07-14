import React, { useState } from "react";
import "./gallery.css";
//import { images } from "./galleryData";
const Gallery = ({ images }) => {
  const [currImg, setCurrImg] = useState(0); //initialiser l'index de la gallerie
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
              currImg > 0
                ? setCurrImg(currImg - 1)
                : setCurrImg(images.length - 1);

              // currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <i
              className="fa-solid fa-chevron-left left-arrow"
              style={{ fontSize: 60 }}
            ></i>
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currImg < images.length - 1
                ? setCurrImg(currImg + 1)
                : //revenir en arriere
                  setCurrImg(images.length - images.length);
            }}
          >
            <i
              className="fa-solid fa-chevron-right"
              style={{ fontSize: 60 }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
