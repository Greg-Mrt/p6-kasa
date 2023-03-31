import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../parts/banner';
import Annonces from '../components/propList';

const HomePage = () => {
    return (
      <>
        <Header />

        <Banner page="HomePage"/>

        <Annonces />

        <Footer />

      </>
    );
  };
  
  export default HomePage;