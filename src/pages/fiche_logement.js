import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import CollapseElement from "../parts/collapse";
import Footer from "../components/footer";
import annonces from "../ressources/annonces.json";
import Carrousel from "../parts/carrousel";

const LogementPage = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [equipments, setEquipments] = useState("");

  useEffect(() => {
    // on filtre les annonces pour trouver celle avec le bon ID
    const annonce = annonces.find((a) => a.id === id);

    // On extrait les images de l'annonce correspondante
    const pictures = annonce?.pictures || [];

    // On extraire la description et les equipement de l'annonce correspondante
    const desc = annonce?.description || "";
    const equip = annonce?.equipments || "";

    // On met à jour le state avec les images et les informations
    setImages(pictures);
    setDescription(desc);
    setEquipments(equip);
  }, [id]);

  return (
    <>
      <Header />

      <div className="fiche-logement">
        <Carrousel images={images} />
      </div>

      <div className="collapse-container">
        <CollapseElement title="Description" content={description} />
        <CollapseElement title="Équipements" content={equipments} />
      </div>

      <Footer />
    </>
  );
};

export default LogementPage;
