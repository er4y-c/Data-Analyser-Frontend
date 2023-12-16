import React from 'react';
import Navbar from './Navbar';

const DashboardContainer = ({ children }) => (
  <div>
    <Navbar />
    <div>{ children }</div>
  </div>
);

export default DashboardContainer;
