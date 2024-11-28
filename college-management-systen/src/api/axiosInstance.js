import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://54.163.151.210:8000',
    timeout: 10000,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Network error:', error.message);
        return Promise.reject(error); // Reject the promise for further handling
    }
);

export default axiosInstance;
