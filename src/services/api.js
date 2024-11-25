import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Cambia el puerto si es diferente
});

export const registerUser = async (username, password) => {
  return await api.post('/auth/register', { username, password });
};

export const loginUser = async (username, password) => {
  return await api.post('/auth/login', { username, password });
};

export default api;
