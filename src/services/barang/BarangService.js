import axios from '@/services/axios.service'

import baseUrl from '../../services/base-url';
import ApiRoute from '../../services/api.route'
const API_URL = baseUrl()+"/";


class BarangService {

  getData() {
    return axios.get(API_URL + ApiRoute.getBarang);
  }

   


}

export default new BarangService();
