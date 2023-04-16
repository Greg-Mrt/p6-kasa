import React from "react";
import "./parts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

function InfoHost({ host, rating }) {
  //je transforme le "rating" en nombre
  const ratingNumber = Number(rating);

  // je créer un tableau de longueur 5 dans lequel les éléments sont initialisés comme true ou false si l'indice i est < ou > au ratingNumber
  const stars = Array.from({ length: 5 }, (_, i) => i < ratingNumber);

  return (
    <div className="host-container">
      <div className="host-subcontainer">
        <div className="host-name">{host.name}</div>
        <img className="host-photo" src={host.picture} alt={host.name} />
      </div>
      <div className="host-rating">
        {stars.map((star, i) =>
          star ? (
            <FontAwesomeIcon icon={solidStar} key={i} className="solidStar" />
          ) : (
            <FontAwesomeIcon icon={solidStar} key={i} className="regularStar" />
          )
        )}
      </div>
    </div>
  );
}

export default InfoHost;
