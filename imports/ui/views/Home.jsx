import React from 'react';
import Navbar from '../../ui/components/nav';
import SideNav from '../../ui/components/sideNav';
import Carousel from '../../ui/components/carousel';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <SideNav />
      <div id="home-main">
        <Carousel />
      </div>
    </div>
  );
}
