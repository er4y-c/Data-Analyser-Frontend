import { api } from './api';

export const data_services = {
    get_all_data: async () => {
        const response = await api.get('/analysis/get_all_data');
        return response.data;
    },
    upload_csv_excel_file: async (file) => {
        const response = await api.post('/data-connector/upload', file, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
        return response.data;
    },
}
