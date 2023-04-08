import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import CollapseElement from '../parts/collapse';
import Footer from '../components/footer';
import annonces from "../ressources/annonces.json";
import Carrousel from '../parts/carrousel';


const LogementPage = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Filtrer les annonces pour trouver celle avec l'ID correspondant
    const annonce = annonces.find((a) => a.id === id);

    // Extraire les images de l'annonce correspondante
    const pictures = annonce?.pictures || [];

    // Mettre à jour le state avec les images correspondantes
    setImages(pictures);
  }, [id]);

  return (
    <>
      <Header />

      <div className="fiche-logement">
      <Carrousel images={images} />
    </div>

      <CollapseElement
        title=""
        content=""
      />

      <Footer />

    </>

  );
};

export default LogementPage;
