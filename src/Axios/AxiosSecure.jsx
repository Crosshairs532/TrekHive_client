import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:4000'
})

const AxiosSecure = () => {
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        config.headers.Authorization = `Bearer ${token}`;
        return config
    },
        (error) => {
            console.log('request error =>', error.message);
            return Promise.reject(error);
        }
    );
    axiosSecure.interceptors.response.use((response) => {
        return response;

    }, (error) => {
        console.log('response error =>', error.message);
        return Promise.reject(error);

    })
    return axiosSecure;
};

export default AxiosSecure;