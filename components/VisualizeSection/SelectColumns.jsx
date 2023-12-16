/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react'
import SelectDropdown from '../SelectDropdown'
import { Separator } from '@radix-ui/themes'
import { data_services } from '../../services/data'
import { VisualizeContext } from '../../context/visualize'

const ColumnsSection = () => {
  const {
    setSelectedColumns,
    sources,
    setSources,
    selectedSource,
    setSelectedSource,
    columns,
    setColumns,
  } = useContext(VisualizeContext)

  useEffect(() => {
    data_services.get_data_sources().then((res) => {
      res.data_sources[0].map((item) => (
        setSources([...sources, { value: item, label: item }])
      ))
    })
  }, [])

  useEffect(() => {
    if (selectedSource) {
      data_services.get_data_columns(selectedSource?.value).then((res) => {
        const newColumns = res.table_columns.map((item) => ({
          value: item[item.length - 1],
          label: item[item.length - 1],
        }));
        setColumns([...columns, ...newColumns]);
    })
    }
  }, [selectedSource])

  return (
    <div className="m-16 space-y-4">
      <h2 className="text-gray-800 font-semibold">Select your data source</h2>
      <SelectDropdown
        id="table-select"
        options={sources}
        handleChange={(value) => setSelectedSource(value)}
        className="w-full lg:w-1/3"
      />
      <h2 className="text-gray-800 font-semibold">Select your columns</h2>
      <SelectDropdown
        isMulti
        id="columns-select"
        options={columns}
        handleChange={(value) => setSelectedColumns(value)}
        className="w-full lg:w-1/3"
      />
      <Separator size={4} my="3" />
    </div>
  )
}

export default ColumnsSection;
