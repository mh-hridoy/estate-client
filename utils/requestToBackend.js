import axios from 'axios'
import { useSelector } from 'react-redux'

const token = useSelector((state) => state.user.token)

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${token}`;
        // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
        config.baseURL = 'http://localhost:5000/api';

        config.withCredentials = true

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
};