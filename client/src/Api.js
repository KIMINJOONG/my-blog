import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/"
});

export const boardApi = {
    upload: () => api.get("/boardServer/upload")
};