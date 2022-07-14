import React from "react";
import "./tag.css";
const Tag = (props) => {
  return (
    <>
      <div className="tag-button">
        <p className="tag-text">{props.text}</p>
      </div>
    </>
  );
};

export default Tag;
