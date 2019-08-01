import  axios from '../utils/request'

const api = {
    getCode: '/api/posts/sms_send',
    loginAPI: '/api/posts/sms_back'
};

export function login(params) {
    return axios.post(api.loginAPI, params);
    /*return axios({
        url: 'http://feifei.ink/api/login',
        method: 'post',
        data: {
            phone: 17665090980,
            code: 204241
        }
    })*/
}

export function getAPIVerifyCode(params) {
    return axios.post(api.getCode, params);
}
