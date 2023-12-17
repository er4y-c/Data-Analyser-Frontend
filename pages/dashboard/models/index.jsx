import React, { useState, useEffect } from 'react';
import { Separator } from '@radix-ui/themes';
import DashboardContainer from '../../../components/DashboardContainer';
import PreTrainedModel from '../../../components/ModelsPage/PreTrainedModel';
import NewTrainBox from '../../../components/ModelsPage/NewTrainBox';
import { model_services } from '../../../services/model';

const Models = () => {
  const [models, setModels] = useState([]);
  useEffect(() => {
    model_services.get_pretrained_models().then((res) => {
      setModels(res?.models);
    });
  }, []);

  return (
    <DashboardContainer>
      <div className="flex justify-center items-center flex-wrap gap-x-4">
        {
          models.map((model, index) => (
            <PreTrainedModel
              key={index}
              icon={model.icon}
              name={model.name}
              description={model.description}
            />
          ))
        }
        <NewTrainBox />
      </div>
      <Separator orientation="horizontal" className="my-8" />
    </DashboardContainer>
  );
}
export default Models;
