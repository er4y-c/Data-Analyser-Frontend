import React, { useContext } from 'react';
import Image from 'next/image';
import { VisualizeContext } from '../../context/visualize';
import { data_services } from '../../services/data';

const GenerateButton = ({ type }) => {
  const {
    isLoading,
    setIsLoading,
    selectedColumns,
    selectedSource,
    setChartData,
} = useContext(VisualizeContext);
  const replacedColumns = selectedColumns.map((item) => item.value);
  const fetchVariations = () => {
    setIsLoading(true)
    if (type === 'chart') {
      data_services.get_charts_data(selectedSource?.value, replacedColumns).then((res) => {
      setChartData(res?.results)
      setIsLoading(false)
    }).catch(() => {
      setIsLoading(false)
    })
    } else if (type === 'table') {
      data_services.get_all_data(selectedSource?.value, replacedColumns).then((res) => {
      setChartData(res?.results)
      setIsLoading(false)
    }).catch(() => {
      setIsLoading(false)
    })
    }
  }

  return (
    <button
      disabled={isLoading}
      className="bg-blue-700 rounded text-white text-sm py-2 px-4"
      onClick={fetchVariations}
    >
      { isLoading && <Image src="/assets/spinner.svg" width={20} height={20} className="mr-2 inline-block" alt="Loading" /> }
      <span>Generate Report</span>
    </button>
  );
};

export default GenerateButton;
