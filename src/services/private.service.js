import Axios from './index';
import { getTokenFromStorage } from '../lib/utils';

const service = Axios.create({
  baseURL: '/users',
});

service.defaults.headers.common['Authorization'] = 'Bearer ' + getTokenFromStorage();

class PrivateService {
  async getUsers() {
    return await service('/all');
  }

  async createUser(data) {
    return await service.post('/', data);
  }
}

export default new PrivateService();
