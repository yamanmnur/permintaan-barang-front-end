import axios from '@/services/axios.service'

import baseUrl from '../../services/base-url';
import ApiRoute from '../../services/api.route'
const API_URL = baseUrl()+"/";


class PermintaanService {

  getData() {
    return axios.get(API_URL + ApiRoute.getPermintaan);
  }

  getAllPeminta() {
    return axios.get(API_URL + ApiRoute.getAllPeminta);
  }

  getDetailData(id) {
    return axios.get(API_URL + ApiRoute.getMasterCutiUrl + id);
  }

  postData(formData) {
    return axios.post(API_URL + ApiRoute.postData, formData);
  }

  putData(formData) {
    return axios.put(API_URL + ApiRoute.putMasterCuti + formData.id, formData)
  }

  deleteData(id) {
    return axios.delete(API_URL + ApiRoute.deleteData + id)
  }

   


}

export default new PermintaanService();
