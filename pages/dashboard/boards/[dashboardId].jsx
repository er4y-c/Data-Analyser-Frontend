import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'next/navigation';
import DashboardContainer from '../../../components/DashboardContainer'
import Loading from '../../../components/Loading';
import DataTable from '../../../components/DataTable';
import ChartBox from '../../../components/ChartBox';
import { data_services } from '../../../services/data';
import { VisualizeContext } from '../../../context/visualize';

const DashboardPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState([]);
  const { dashboardId } = useParams();
  // const { chartData, selectedColumns } = useContext(VisualizeContext);

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
      <p className="text-2xl text-gray-800 m-16">{ dashboardId }</p>
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

export default DashboardPage
