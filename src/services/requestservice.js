import axios from 'axios';
import authHeader from './auth-header';
import tokenHeader from './token-header';
import baseUrl from './base-url';

const API_URL = baseUrl()+"/api/all/";

class RequestService {
 
    postInformasiUmum(formData) {
        var headers = authHeader();        
        var form = new FormData();
        form.append("file", formData.file);
        form.append("deskripsi", formData.deskripsi);
        return axios
            .post(API_URL + 'set-informasi-umum', form,{ 
            headers: { 'Content-Type': 'multipart/form-data','Authorization' : tokenHeader() } 
        });
    }
    
    getInformasiUmum(){
        return axios.get(API_URL + 'informasi-umum?page=1&size=5', { headers: authHeader() });
    }

    getDivisi(){
        return axios.get(API_URL + 'divisi', { headers: authHeader() });
    }



 
}

export default new RequestService();
