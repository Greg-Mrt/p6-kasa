import React from 'react';
import './parts.css';

function InfoHost({ host }) {

  return (
    <div className="host-container">
      <div className="host-name">{host.name}</div>
      <img className="host-photo" src={host.picture} alt={host.name}/>
    </div>
  );
}

export default InfoHost;