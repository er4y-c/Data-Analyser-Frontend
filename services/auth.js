import { api } from './api';

export const auth_services = {
  login: async (email, password) => {
    const res = await api.post('/auth/login', {
        email,
        password,
    })
    return res?.data;
  },
  create_user: async (email, password, full_name, department, projects) => {
    const res = await api.post('/auth/create_user', {
        email,
        password,
        full_name,
        department,
        projects,
    })
    return res?.data;
  },
  me: async (email) => {
    const res = await api.get(`/auth/users/me/${email}}`)
    return res?.data;
  },
};
