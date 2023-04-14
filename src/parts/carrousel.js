import { useState } from "react";
import {faChevronLeft,faChevronRight,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Carrousel({ images }) {
  //on définit l'index sur 0
  const [currentIndex, setCurrentIndex] = useState(0);

  //la fonction handleClick permet de mettre en place la nav au click entre prev et next
  //a chaque clic, la variable currentIndex est modifiée pour passer à l'image précédente ou suivante
  const handleClick = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    } else if (direction === 'next') {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }
  };

  //fonction pour indiquer si les fleches de direction doivent être affichées ou non
  const showControls = images.length > 1;

  return (
    <div className="carrousel">
      {/* si showControls est vrai on affiche les boutons de contrôle et le compteur */}
      {showControls && (
        <>
          <FontAwesomeIcon icon={faChevronLeft} className="carrousel-button-prev" onClick={() => handleClick('prev')} />
          <span className="carrousel-counter">
            {/* le compteur est mis à jour */}
            {currentIndex + 1}/{images.length}
          </span>
          <FontAwesomeIcon icon={faChevronRight} className="carrousel-button-next" onClick={() => handleClick('next')} />
        </>
      )}
      {/* on affiche l'image */}
      <img className="carrousel-image" src={images[currentIndex]} alt="" />
    </div>
  );
}

export default Carrousel;
