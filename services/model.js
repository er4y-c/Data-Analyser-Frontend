import { api } from './api';

export const model_services = {
    get_pretrained_models: async () => {
        const response = await api.get('/model/get_pretrained_models');
        return response.data;
    },
    get_avilable_models: async () => {
        const response = await api.get('/model/get_avilable_models');
        return response.data;
    },
    train_model: async (model_name, data_source, target_column) => {
        const response = await api.post('/model/train_model', { model_name, data_source, target_column });
        return response.data;
    },
}
