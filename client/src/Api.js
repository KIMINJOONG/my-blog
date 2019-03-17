import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/board"
});

export const boardApi = {
    upload: () => api.post("boardServer/upload")
};