import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portal-api.gorealtime.io',
  timeout: 150000,
});

export default api;
