import Accordion from "../../components/accordion/accordion";
import Banner from "../../components/banner/banner";
import bannerBg from "./about_banner.png";
import "./about.css";
const About = () => {
  const contentText =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  return (
    <>
      <div className="about-content">
        <Banner cover={bannerBg} />
        <div className="accordions">
          <Accordion title="Fiabilité" content={contentText} />
          <Accordion title="Respect" content={contentText} />
          <Accordion title="Responsabilité" content={contentText} />
        </div>
      </div>
    </>
  );
};

export default About;
