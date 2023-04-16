import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import CollapseElement from "../parts/collapse";
import Footer from "../components/footer";
import annonces from "../ressources/annonces.json";
import Carrousel from "../parts/carrousel";
import InfoAppart from "../parts/infoAppart";
import InfoHost from "../parts/infoHost";
import ErrorPage from "../pages/error";

const LogementPage = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [equipments, setEquipments] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState([]);
  const [host, setHost] = useState({});
  const [rating, setRating] = useState(0);
  const [annonce, setAnnonce] = useState({});

  useEffect(() => {
    // on filtre les annonces pour trouver celle avec le bon ID
    const annonce = annonces.find((a) => a.id === id);

    // On extrait les images de l'annonce correspondante
    const pictures = annonce?.pictures || [];

    // On extrait la description et les equipement de l'annonce correspondante
    const desc = annonce?.description || "";
    const equip = annonce?.equipments || "";
    const title = annonce?.title || "";
    const location = annonce?.location || "";
    const tags = annonce?.tags || "";
    const host = annonce?.host || {};
    const rating = annonce?.rating || 0;

    // On met à jour le state avec les images et les informations
    setImages(pictures);
    setDescription(desc);
    setEquipments(equip);
    setTitle(title);
    setLocation(location);
    setTags(tags);
    setHost(host);
    setRating(rating);
    setAnnonce(annonce);
  }, [id]);

  return (
    <>
      {annonce ? (
        <>
          <Header />

          <Carrousel images={images} />

          <div className="logement-container">
            <div className="info-container">
              <div>
                <InfoAppart title={title} location={location} tags={tags} />
              </div>
              <div>
                <InfoHost host={host} rating={rating} />
              </div>
            </div>

            <div className="collapse-container">
              <CollapseElement title="Description" content={description} />
              <CollapseElement title="Équipements" content={equipments} />
            </div>
          </div>
          <Footer />
        </>
      ) : 
        <ErrorPage />
      }
    </>
  );
};

export default LogementPage;
