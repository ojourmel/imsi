import axios from "axios"

export const http = axios.create({
    baseURL: '/api'
});
export default http;