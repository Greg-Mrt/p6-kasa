import React from 'react';
import './parts.css';

function InfoAppart({ title, location, tags, rating, host}) {
    
    return (
      <div className="title">
          {title}
        </div>
    );
  }
  
  export default InfoAppart;