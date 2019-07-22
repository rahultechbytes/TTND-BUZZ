import axios from 'axios';
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config => {
    config.headers.authentication = localStorage.getItem('token');
    return config;
});

axiosInstance.interceptors.response.use(res => {
    return res;
}, err => {
    if (err.response.data.errtype === 'session timeout') {
        localStorage.removeItem('token');
        window.location.href = "/";
    }
});

export default axiosInstance;   