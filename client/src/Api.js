import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/"
});

export const boardApi = {
  upload: data =>
    api.post("board/upload", {
      data
    }),
  getList: () => api.get("board/list"),
  getDetail: () => api.get("board/detail")
};
