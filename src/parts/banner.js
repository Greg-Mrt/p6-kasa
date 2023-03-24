import React from "react";

function Banner({ page }) {
  let imageUrl = "";

  if (page === "HomePage") {
    imageUrl = process.env.PUBLIC_URL + "/images/ocean.png";
  } else if (page === "AProposPage") {
    imageUrl = process.env.PUBLIC_URL + "/images/montagnes.png";
  } 

  return (
    <div className="banner">
      <img className="img-banner" src={imageUrl} alt="Bannière" />
    </div>
  );
}

export default Banner;