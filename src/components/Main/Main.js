import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Landingpage from '../Landingpage/Landingpage';
import Navbar from '../Navbar/Navbar';
import HowWork from './../HowWork/HowWork';
import Menu from './../Menu/Menu';

const Main = () => {
     return (
          <div className="overflow-hidden">
          <Navbar />
          <Header />
          <HowWork />
          <Menu />
          <Landingpage />
          <Footer />
          </div>
     );
};

export default Main;