import React from "react";
import Header from "../components/header";
import './pages.css'
import { Link } from 'react-router-dom';


const ErrorPage = () => {
  return (
    <>
      <Header />

      <h1> 404 </h1>
      <p className="subtitle">Oups! La page que vous demandez n'existe pas.</p>

      <Link to="/home" className="homeLink">Retourner sur la page d’accueil</Link>

    </>
  );
};

export default ErrorPage;
