import React from 'react';
import Header from '../components/header';
import CollapseElement from '../parts/collapse';
import Footer from '../components/footer';
import Banner from '../parts/banner';

const AProposPage = () => {
  return (
    <>
      <Header />

      <Banner page="AProposPage" />

      <CollapseElement
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />

      <CollapseElement
        title="Respect"
        content={<div>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>}
      />

      <CollapseElement
        title="Service"
        content={<div>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>}
      />

      <CollapseElement
        title="Sécurité"
        content={<div>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>}
      />

      <Footer />

    </>

  );
};

export default AProposPage;
