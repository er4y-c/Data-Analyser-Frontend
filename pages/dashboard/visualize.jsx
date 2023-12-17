import React, { useContext } from 'react';
import DashboardContainer from '../../components/DashboardContainer';
import BarChart from '../../components/Charts/BarChart';
import ChartBox from '../../components/ChartBox';
import PageHeader from '../../components/PageHeader';
import SelectColumns from '../../components/VisualizeSection/SelectColumns';
import GenerateButton from '../../components/VisualizeSection/GenerateButton';
import { VisualizeContext } from '../../context/visualize';

const Visualize = () => {
    const { chartData, selectedColumns, selectedSource } = useContext(VisualizeContext);
    const labels = selectedColumns.map((item) => item.value);

    const data = {
    labels,
    datasets: [{
        label: selectedSource?.value,
        data: chartData && chartData[0],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }],
};
  return (
    <DashboardContainer>
      <PageHeader title="Visualize" description="Explore your data using charts" />
      <SelectColumns />
      <div className="mx-16">
        <GenerateButton type="chart" />
      </div>
      { chartData && chartData.length > 0 ?
      <ChartBox height={56} noButtons>
        <BarChart data={data} />
      </ChartBox> : null
      }
    </DashboardContainer>
  );
};

export default Visualize;
