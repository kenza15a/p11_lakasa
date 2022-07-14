import React from "react";
import StarIcon from "./starIcon";
/**
 @param maxRating nombre maximal des etoiles
 @param selectedRating les etoiles selectionnées
 */
const Rating = ({ maxRating, selectedRating }) => {
  const renderStar = () => {
    let startsToRender = []; //react components array
    for (let i = 0; i < maxRating; i++) {
      startsToRender.push(
        <StarIcon key={i} color={i < selectedRating ? "#ff6060" : ""} />
      );
    }
    return startsToRender;
  };

  return <>{<div className="ratings">{renderStar()}</div>}</>;
};
export default Rating;
