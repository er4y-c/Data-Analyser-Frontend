import { api } from './api';

export const data_services = {
    get_all_data: async () => {
        const response = await api.get('/get_data');
        return response.data;
    },
}
