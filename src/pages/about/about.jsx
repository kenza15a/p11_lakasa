import Accordion from "../../components/accordion/accordion";
import Banner from "../../components/banner/banner";
import bannerBg from "./about_banner.png";
import { useState } from "react";
import "./about.css";
const About = () => {
  const [active, setActive] = useState(["Respect"]); //intialiser l'accordeon ouvert par defaut

  const contentText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <>
      <Banner cover={bannerBg} />
      <div className="accordions">
        <Accordion
          title="Fiabilité"
          content={contentText}
          active={active}
          setActive={setActive}
        />
        <Accordion
          title="Respect"
          content={contentText}
          active={active}
          setActive={setActive}
        />
        <Accordion
          title="Responsabilité"
          content={contentText}
          active={active}
          setActive={setActive}
        />
      </div>
    </>
  );
};

export default About;
