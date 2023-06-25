import Axios from './index';

const service = Axios.create({
  baseURL: '/auth',
});

class PublicService {
  async signUp(data) {
    return await service.post('/signup', data);
  }

  async signIn(data) {
    return await service.post('/signin', data);
  }
}

export default new PublicService();
