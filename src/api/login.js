import  axios from '../utils/request'

export function login() {
    return axios.post('http://feifei.ink/api/login',{
        user: {
            phone: 17665090980,
            code: 204241
        }
    });
    /*return axios({
        url: 'http://feifei.ink/api/login',
        method: 'post',
        data: {
            phone: 17665090980,
            code: 204241
        }
    })*/
}

export function getVerifyCode() {
    return axios.get('',{
        params:{
            phone: 17665090980
        }
    })
}
