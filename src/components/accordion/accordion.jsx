import React from "react";
import "./accordion.css";
/**
 * @param title {String } le titre de l'accordeon
 * @param content {String } le contenu de l'accordeon
 * @param active {[String]} les titres a afficher onload
 * @param setActive hook useState definit dans la page parent
 *
 */
const Accordion = ({ title, content, active, setActive }) => {
  return (
    <>
      {/**<i class="fa-solid fa-angle-up"></i> */}
      <div className="accordion">
        <div className="accordion-heading">
          <div className="container">
            <p>{title}</p>
            <span
              className={
                active.indexOf(title) !== -1
                  ? "fa-solid fa-angle-down"
                  : "fa-solid fa-angle-up"
              }
              onClick={() => {
                setActive(title);
              }}
            ></span>
          </div>
        </div>
        {/**tester le titre avant de mettre la classe */}

        <div
          className={(active.indexOf(title) !== -1 ? "show" : "") + "content"}
        >
          {/**active.indexOf(title) !==-1? si le tableau active content l'elelemnt title affiche le contenu*/}
          <div className="container">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Accordion;
