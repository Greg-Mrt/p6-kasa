import React from "react";
import annonces from "../ressources/annonces.json";
import './components.css';

const Annonces = () => {
    return (
      <div className="blockPropreties">
        {annonces.map((annonce) => (
          <div className="annonceCard" key={annonce.id}>
            <img src={annonce.pictures[0]} alt={annonce.title} />
            <p>{annonce.title}</p>
          </div>
        ))}
      </div>
    );
  };

export default Annonces;