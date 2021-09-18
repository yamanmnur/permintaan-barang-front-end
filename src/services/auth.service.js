import axios from 'axios';
import authHeader from './auth-header';
import baseUrl from './base-url';

const API_URL = baseUrl()+"/api/";
// const API_URL = https://localhost:8080/auth/sign';
// const API_URL = 'https://localhost:9090/api/auth/';
const API_URL_ALL = baseUrl()+'/api/all/';
// const API_URL_ALL = 'https://localhost:9090/api/all/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data.message;
      });
  }

  cekRoleUser(idUser,roleName) {
    // cek-role-user
    return axios
      .get(API_URL + 'cek-role-user', {
        params: {
          idUser : idUser,
          roleName : roleName
        }
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }

  checkAuth(){
    return axios.get(API_URL_ALL + 'check-auth', { headers: authHeader() });
  }
}

export default new AuthService();