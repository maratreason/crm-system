import axios from "axios";

export const API_URL = "/api"

const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

$api.interceptors.request.use(config => {
    config.headers.Authorization = localStorage.getItem("auth-token");
    return config;
});

export default $api;
