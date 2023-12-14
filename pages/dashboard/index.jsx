import React, { useEffect, useState } from 'react';
import DashboardContainer from '../../components/DashboardContainer';
import DataTable from '../../components/DataTable';
import ChartBox from '../../components/ChartBox';
import Loading from '../../components/Loading';
import { data_services } from '../../services/data';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    data_services.get_all_data()
    .then((res) => {
      setData(res?.results)
      const keys = Object.keys(res.results[0]).map((key) =>
        ({ Header: key, accessor: key, id: key }));
      setColumns(keys);
      setLoading(false);
    })
    .catch(() => {
      setData([]);
      setLoading(false);
    });
  }, []);

  return (
    <DashboardContainer>
      <p className="text-2xl text-gray-800">Welcome back</p>
      <ChartBox
        title="Total Users"
        description="This report includes all user data"
      >
        { loading && <Loading /> }
        <DataTable columns={columns} data={data} />
      </ChartBox>
    </DashboardContainer>
  );
}
export default Dashboard;
