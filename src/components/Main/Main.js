import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import HowWork from './../HowWork/HowWork';
import Menu from './../Menu/Menu';

const Main = () => {
     return (
          <div>
          <Navbar />
          <Header />
          <HowWork />
          <Menu />
          </div>
     );
};

export default Main;