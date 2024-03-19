import axios from "axios";
import UseAuth from "../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:4000'
})

const AxiosSecure = () => {
    const { logout } = UseAuth();
    const navigate = useNavigate();
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        console.log(token);
        config.headers.authorization = `Bearer ${token}`;
        return config
    },
        (error) => {
            console.log('request error =>', error.message);
            return Promise.reject(error);
        }
    );
    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        console.log('response error =>', error.message);
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logout();

            navigate('/login');
        }
        return Promise.reject(error);

    })
    return axiosSecure;
};

export default AxiosSecure;