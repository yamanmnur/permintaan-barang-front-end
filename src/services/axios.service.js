import axios from 'axios';
axios.interceptors.request.use(function (config) {
  var token = JSON.parse( localStorage.getItem('user'));
  if(token != null) {
    config.headers.Authorization =  'Bearer '+token.accessToken;
  }

  return config;
});

export default axios;
