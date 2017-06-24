import React from 'react';
import Navbar from '../../ui/components/nav';
import SideNav from '../../ui/components/sideNav';
import Carousel from '../../ui/components/carousel';
import Columns from '../../ui/components/columns';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <SideNav />
      <div id="home-main">
        <Carousel />
        <Columns
          overlayTitle="Title"
          overlayText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed egestas erat, quis mattis sem. Proin facilisis purus eget justo finibus tristique. Proin luctus velit et commodo blandit."
        />
      </div>
    </div>
  );
}
