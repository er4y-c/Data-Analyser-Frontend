import React, { useContext } from 'react';
import DashboardContainer from '../../components/DashboardContainer';
import DataTable from '../../components/DataTable';
import ChartBox from '../../components/ChartBox';
import PageHeader from '../../components/PageHeader';
import SelectColumns from '../../components/VisualizeSection/SelectColumns';
import GenerateButton from '../../components/VisualizeSection/GenerateButton';
import { VisualizeContext } from '../../context/visualize';

const DataTableSection = () => {
  const { chartData, selectedColumns } = useContext(VisualizeContext);
  const labels = selectedColumns.map((item) => item.value);
  const keys = labels.map((label) => ({ Header: label, accessor: label, id: label }));

  return (
    <DashboardContainer>
      <PageHeader title="Data Table" description="Explore your data using filters and sorting on Data Table" />
      <SelectColumns />
      <div className="mx-16">
        <GenerateButton type="table" />
      </div>
      { chartData && chartData.length > 0 ?
      <ChartBox height={56} noButtons>
        <DataTable data={chartData} columns={keys} />
      </ChartBox> : null
      }
    </DashboardContainer>
  )
}

export default DataTableSection;
