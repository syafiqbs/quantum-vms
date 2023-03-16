import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1/admin/';

class UserService {
  getAllUsers(){
    return axios.get(API_URL + 'getAllUsers');
  }
}

export default new UserService();