import React, { useState } from "react";
import "./accordion.css";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className="arrows">
          {isActive ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </div>
      </div>
      <div
        className={!isActive ? "accordion-content" : "accordion-content-show"}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
