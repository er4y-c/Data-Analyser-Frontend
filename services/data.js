import { api } from './api';

export const data_services = {
    get_all_data: async (table_name, columns) => {
        const response = await api.post(`/analysis/get_all_data/${table_name}`, { columns });
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
    get_data_sources: async () => {
        const response = await api.get('/analysis/get_data_sources');
        return response.data;
    },
    get_data_columns: async (data_source) => {
        const response = await api.get(`/analysis/get_data_sources/${data_source}`);
        return response.data;
    },
}
