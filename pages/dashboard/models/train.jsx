import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import { ModelContext } from '../../../context/model';
import DashboardContainer from '../../../components/DashboardContainer';
import PageHeader from '../../../components/PageHeader';
import SelectDropdown from '../../../components/SelectDropdown';
import { model_services } from '../../../services/model';
import { data_services } from '../../../services/data';

const TrainPage = () => {
    const { models } = useContext(ModelContext);
    const [modelList, setModelList] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);
    const [sourceList, setSourceList] = useState(null);
    const [selectedDataset, setSelectedDataset] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        model_services.get_pretrained_models().then((res) => {
            setModelList(res?.models);
        });

        data_services.get_data_sources().then((res) => {
            setSourceList(res?.data_sources[0]);
        });
    }, []);

    const fetchTrain = () => {
        setIsLoading(true);
        model_services.train_model(selectedModel, selectedDataset).then((res) => {
            setMessage(res?.message);
            setIsLoading(false);
        }).catch(() => {
            setMessage('Training failed');
            setIsLoading(false);
        })
    }

    return (
        <DashboardContainer>
            <PageHeader title="Train" description="Train and customize your machine learning model" />
            <SelectDropdown
              id="dataset-select"
              options={sourceList}
              handleChange={(e) => setSelectedDataset(e.target.value)}
            />
            <SelectDropdown
              id="model-select"
              options={modelList}
              handleChange={(e) => setSelectedModel(e.target.value)}
            />
            <button
              disabled={isLoading}
              className="bg-blue-700 rounded text-white text-sm py-2 px-4"
              onClick={fetchTrain}
            >
      { isLoading && <Image src="/assets/spinner.svg" width={20} height={20} className="mr-2 inline-block" alt="Loading" /> }
      <span>Generate Report</span>
            </button>
        </DashboardContainer>
  )
}
export default TrainPage;
