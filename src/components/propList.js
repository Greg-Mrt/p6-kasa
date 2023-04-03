import React from "react";
import annonces from "../ressources/annonces.json";
import "./components.css";
import { Link } from "react-router-dom";

const Annonces = () => {
  return (
    <div className="blockPropreties">
      {annonces.map((annonce) => (
        <Link to={`/fiche_logement/${annonce.id}`}>
          <div className="annonceCard" key={annonce.id}>
            <img src={annonce.pictures[0]} alt={annonce.title} />
            <p>{annonce.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Annonces;
