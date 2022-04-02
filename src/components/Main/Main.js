import React from 'react';
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
          </div>
     );
};

export default Main;