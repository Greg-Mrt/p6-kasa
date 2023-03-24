import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../parts/banner';

const HomePage = () => {
    return (
      <div>
        <Header />

        <Banner page="HomePage"/>

        <Footer />

      </div>
    );
  };
  
  export default HomePage;