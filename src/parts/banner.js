import React from "react";

function Banner({ page }) {
  let imageUrl = "";
  let title = "";

  if (page === "HomePage") {
    imageUrl = process.env.PUBLIC_URL + "/images/ocean.png";
    title = "Chez vous, partout et ailleurs"
  } else if (page === "AProposPage") {
    imageUrl = process.env.PUBLIC_URL + "/images/montagnes.png";
  } 

  return (
    <div className="banner">
      <img className="img-banner" src={imageUrl} alt="Bannière" />
      {page === "HomePage" && <h1 className="bannerTitle">{title}</h1>}
    </div>
  );
}

export default Banner;