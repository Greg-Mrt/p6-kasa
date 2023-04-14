import React from 'react';
import './parts.css';

function InfoAppart({ title, location, tags }) {

  // je vais une map pour récupérer chaque tag et l'afficher de manière indépendante
  const tagList = tags.map((tag, index) => (
    <div className="tags" key={index}>{tag}</div>
  ));

  return (
    <>
      <div className="title">
        {title}
      </div>

      <div className="location">
        {location}
      </div>

      <div className="tags-container">
        {tagList}
      </div>
    </>
  );
}

export default InfoAppart;