import React, { useState } from 'react';

function CollapseElement({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse-element">
      <button className="collapse-element__button" onClick={() => setOpen(!open)}>
        {title}
      </button>
      {open && (
        <div className="collapse-element__content">
          {content}
        </div>
      )}
    </div>
  );
}

export default CollapseElement;