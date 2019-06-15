import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/",
  withCredentials: true
});

export const boardApi = {
  upload: data =>
    api.post("board/upload", {
      data
    }),
  getList: () =>
    api.get("board/list", {
    }),
  getDetail: id =>
    api.get(`board/detail/${id}`, {
    }),
  delete: id =>
    api.delete(`board/delete/${id}`, {
    }),
  update: data =>
    api.put(`board/update/${data.id}`, {
      data,
    })
};

export const userApi = {
  join: data =>
    api.post("user/join", {
      data
    }),
  login: data =>
    api.post("user/login", {
      data,
    
    })
};
