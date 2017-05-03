import React from 'react';
import Navbar from '../components/Nav';

export const App = ({content}) => (
  <div id="main-container">
    <Navbar />
    <div>
      {content}
    </div>
  </div>
)
