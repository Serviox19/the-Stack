import React from 'react';
import Navbar from '../../ui/components/nav';
import SideNav from '../../ui/components/sideNav';
import Carousel from '../../ui/components/carousel';
import Column from '../../ui/components/column';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <SideNav />
      <div id="home-main">
        <Carousel />
        <Column />
      </div>
    </div>
  );
}
