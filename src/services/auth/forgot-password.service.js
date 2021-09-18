import axios from 'axios';
import authHeader from '../auth-header';

import tokenHeader from '../token-header';

// const API_URL = 'https://localhost:9090/api/all/';
import baseUrl from '../base-url';

const API_URL = baseUrl()+"/api/auth/";

const postForgotPasswordUrl = 'forgot-password';

class ForgotPasswordService {    

    postForgotPassword(formData) { 
        return axios
        .post(
            API_URL + postForgotPasswordUrl,
            formData
        );
    }

}

export default new ForgotPasswordService();