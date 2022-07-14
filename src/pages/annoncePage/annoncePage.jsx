import { useParams } from "react-router-dom";
//import AnnonceService from "../../services/annonceService";
import Profile from "../../components/profile/profile";
import Rating from "../../components/ratingStarts/rating";
import Tag from "../../components/tag/tag";
import AnnonceTitle from "../../components/annonceTitle/annonceTitle";
import Location from "../../components/Location/location.jsx";
import "./annoncePage.css";
import Accordion from "../../components/accordion/accordion";
import { useState } from "react";
import Gallery from "../../components/gallery/gallery";
import AnnonceService from "../../services/annonceService";
const AnnoncePage = () => {
  const [active, setActive] = useState(["Description", "Equipements"]);
  const service = new AnnonceService();
  let { id } = useParams();
  const annonceDataTab = service.getAnnonceById(id);
  const images = annonceDataTab.pictures;
  const hostName = annonceDataTab.host.name;
  const hostPicture = annonceDataTab.host.picture;
  const location = annonceDataTab.location;
  const title = annonceDataTab.title;
  const tags = annonceDataTab.tags; //tableau de tags*/
  const description = annonceDataTab.description;
  const equipements = annonceDataTab.equipments;

  return (
    <>
      {/*<p>page de l'annonce {id}</p>*/}
      <div className="gallery-container">
        <Gallery images={images} />
      </div>
      <div className="infos">
        <div className="basic-infos">
          <div className="texts">
            <AnnonceTitle content={title} />
            <Location content={location} />
          </div>
          <div className="tags-container">
            {tags &&
              tags.map((tag) => {
                return <Tag key={tag + 1} text={tag} />;
              })}
          </div>
        </div>
        <div className="specifications">
          <Profile name={hostName} picture={hostPicture} />
          <Rating maxRating="5" selectedRating={annonceDataTab.rating} />
        </div>
      </div>
      <div className="details">
        <Accordion
          title="Description"
          content={description}
          active={active}
          setActive={setActive}
        />
        <Accordion
          title="Equipements"
          content={
            equipements &&
            equipements.map((equipement) => {
              return <li key={equipement + 1}>{equipement}</li>;
            })
          }
          active={active}
          setActive={setActive}
        />
      </div>
    </>
  );
};

export default AnnoncePage;
