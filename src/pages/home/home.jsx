import React, { Component } from "react";
import "./home.css";
import AnnonceCard from "../../components/annonce/annoceCard";
import Banner from "../../components/banner/banner";
//import annonceData from "../../services/data.json";
import { Link } from "react-router-dom";
import AnnonceService from "../../services/annonceService";
import bannerBg from "./IMG.png";

class Home extends Component {
  // const service =new AnnonceService()
  render() {
    const service = new AnnonceService();
    const annonceData = service.annoncesTab;
    const title = "Chez vous, partout et ailleurs";
    /*console.table(annonceData);*/
    return (
      <>
        <Banner title={title} cover={bannerBg} />
        <div className="annonces-container">
          {annonceData && //pour verifier si les données existe avent de les afficher
            annonceData.map((data) => {
              return (
                <Link
                  to={`/annonce/${data.id}`}
                  key={data.id}
                  className="annonce"
                >
                  <AnnonceCard title={data.title} cover={data.cover} />
                </Link>
              );
            })}
        </div>
      </>
    );
  }
}

export default Home;
