import React from 'react';
import Navbar from '../../ui/components/Nav';
import Carousel from '../../ui/components/Carousel';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Home</h1>
        <Carousel />
      </div>
    </div>
  );
}
