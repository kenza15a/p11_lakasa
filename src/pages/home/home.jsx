import React, { Component } from "react";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import AnnonceCard from "../../components/annonce/annoceCard";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import annonceData from "../../services/data.json";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <div className="annonces-container">
          {annonceData && //pour verifier si les données existe avent de les afficher
            annonceData.map((data) => {
              return (
                <AnnonceCard
                  key={data.id}
                  title={data.title}
                  cover={data.cover}
                />
              );
            })}
        </div>

        <Footer />
      </>
    );
  }
}

export default Home;
