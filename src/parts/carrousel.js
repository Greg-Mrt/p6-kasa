import { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    } else if (direction === 'next') {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }
  };

  const showControls = images.length > 1;

  return (
    <div className="carrousel">
      {showControls && (
        <>
          <FontAwesomeIcon icon={faChevronLeft} className="carrousel-button-prev" onClick={() => handleClick('prev')} />
          <span className="carrousel-counter">
            {currentIndex + 1}/{images.length}
          </span>
          <FontAwesomeIcon icon={faChevronRight} className="carrousel-button-next" onClick={() => handleClick('next')} />
        </>
      )}
      <img className="carrousel-image" src={images[currentIndex]} alt="" />
    </div>
  );
}

export default Carrousel;
