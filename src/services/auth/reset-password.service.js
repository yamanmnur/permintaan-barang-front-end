import axios from 'axios';
import authHeader from '../auth-header';

import tokenHeader from '../token-header';
import baseUrl from '../base-url';

const API_URL = baseUrl()+"/api/auth/";

// const API_URL = 'https://localhost:9090/api/all/';


const postResetPasswordUrl = 'forgot-password/reset-password';

class ResetPasswordService {

    postResetPassword(formData) {
        return axios
            .post(
                API_URL + postResetPasswordUrl,
                formData
            );
    }
    // putResetPassword(formData) {
    //     var headers = authHeader();

    //     return axios
    //         .put(
    //             API_URL + putResetPassword + formData.idResetPassword, formData                
    //         );
    // }

}

export default new ResetPasswordService();