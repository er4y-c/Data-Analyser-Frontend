import React from 'react';
import Navbar from './Navbar';

const DashboardContainer = ({ children }) => (
  <div>
    <Navbar />
    <div className="mx-8">{ children }</div>
  </div>
);

export default DashboardContainer;
