import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1/';

class UserService {

  async getUser() {
    return axios({
      url: 'vendor/getUser',
      method: 'post',
      baseURL: API_URL,
      headers: authHeader(),
      data: {
        email: localStorage.email
      },
      withCredentials: false


    })
  }
  async getAdmin() {
    return axios({
      url: 'admin/getAdmin',
      method: 'post',
      baseURL: API_URL,
      headers: authHeader(),
      data: {
        email: localStorage.email
      },
      withCredentials: false


    })
  }
}

export default new UserService();