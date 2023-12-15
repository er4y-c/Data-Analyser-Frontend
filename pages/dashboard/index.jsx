import React, { useEffect, useState } from 'react';
import DashboardContainer from '../../components/DashboardContainer';
import Boards from '../../components/MainPageSections/Boards';
import Notebooks from '../../components/MainPageSections/Notebooks';
import Reports from '../../components/MainPageSections/Reports';
import Models from '../../components/MainPageSections/Models';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    console.log('rendering');
  }, []);

  return (
    <DashboardContainer>
      <p className="text-2xl text-gray-800 my-16">Welcome back</p>
      <Boards />
      <Reports />
      <Notebooks />
      <Models />
    </DashboardContainer>
  );
}
export default Dashboard;
