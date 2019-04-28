import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/"
});

export const boardApi = {
  upload: () => api.post("boardServer/upload"),
  getList: () => api.get("boardServer/list"),
  getDetail: () => api.get("boardServer/detail")
};
