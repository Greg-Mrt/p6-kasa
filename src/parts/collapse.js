import React, { useState } from 'react';
import './parts.css';


function CollapseElement({ title, content }) {
  const [open, setOpen] = useState(false);

  const chevron = open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>;


  return (
    <div className="collapse_block">
      <div className="collapse_title" onClick={() => setOpen(!open)}>
        {title}
        {chevron}
      </div>
      {open && (
        <div className="collapse_content">
          {Array.isArray(content) ? (
            <ul style={{ listStyleType: "none" }}>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CollapseElement;