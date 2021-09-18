import axios from 'axios';
import authHeader from './auth-header';

import baseUrl from '../base-url';

const API_URL = baseUrl()+"/api/all/";
// const API_URL = this.$baseUrl+'auth/sign';

class UserService {
  
//   getUserBoard() {
//     return axios.get(API_URL + 'user', { headers: authHeader() });
//   }

//   getModeratorBoard() {
//     return axios.get(API_URL + 'mod', { headers: authHeader() });
//   }

//   getAdminBoard() {
//     return axios.get(API_URL + 'admin', { headers: authHeader() });
//   }
}

export default new UserService();