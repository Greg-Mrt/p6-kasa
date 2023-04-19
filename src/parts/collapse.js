import React, { useState } from 'react';
import './parts.css';


function CollapseElement({ title, content }) {
  // on state le collapse sur false pour qu'il soit fermé à l'ouverture de la page
  const [open, setOpen] = useState(false);

  //le chevron change en fonction de l'etat open du collapse
  const chevron = open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>;

  return (
    <div className="collapse_block">
      {/* au clic on change le state du collapse */}
      <div className="collapse_title" onClick={() => setOpen(!open)}>
        {title}
        {chevron}
      </div>
      {open && (
        <div className="collapse_content">
          {/* si le contenu est un tableau on l'affiche sous forme de liste */}
          {Array.isArray(content) ? (
            <ul style={{ listStyleType: "none" }}>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : 
          // sinon on affiche le contenu normalement 
          (
            <div>{content}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default CollapseElement;