import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/"
});

export const boardApi = {
  upload: data =>
    api.post("board/upload", {
      data
    }),
  getList: () =>
    api.get("board/list", {
      headers: {
        "X-JWT": "a"
      }
    }),
  getDetail: id =>
    api.get(`board/detail/${id}`, {
      headers: {
        "X-JWT": "a"
      }
    }),
  delete: id =>
    api.delete(`board/delete/${id}`, {
      headers: {
        "X-JWT": "a"
      }
    }),
  update: data =>
    api.put(`board/update/${data.id}`, {
      data,
      headers: {
        "X-JWT": "a"
      }
    })
};

export const userApi = {
  join: data =>
    api.post("user/join", {
      data
    }),
  login: data =>
    api.post("user/login", {
      data
    })
};
