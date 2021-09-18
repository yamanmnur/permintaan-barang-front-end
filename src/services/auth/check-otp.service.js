import axios from 'axios';
import authHeader from '../auth-header';

import tokenHeader from '../token-header';

// const API_URL = 'https://localhost:9090/api/all/';
import baseUrl from '../base-url';

const API_URL = baseUrl()+"/api/auth/";
const postCheckOtpUrl = 'forgot-password/check-otp';

class CheckOtpService {    

    postCheckOtp(formData) { 
        return axios
        .post(
            API_URL + postCheckOtpUrl,
            formData
        );
    }

}

export default new CheckOtpService();