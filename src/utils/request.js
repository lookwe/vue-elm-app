import axios from 'axios'

const service = axios.create({
    timeout: 500000
});

/*请求*/
service.interceptors.request.use(
    config => {
        // 配置请求参数
        return config
    },
    error => {
        console.log(error);
        Promise.reject(error)
    }
);

/*相应*/
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        console.log(error);
        return Promise.reject(error)
    }
);

export default service;
