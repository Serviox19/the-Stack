import React from 'react';
import Navbar from '../../ui/components/nav';
import SideNav from '../../ui/components/sideNav';
import Slider from '../../ui/components/slider';
import Column from '../../ui/components/column';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <SideNav />
      <div id="home-main">
        <Slider />
        <Column />
      </div>
    </div>
  );
}
