import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_SERVER_URL + '/api';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: '*',
    'Content-Type': 'application/json',
  },
});
