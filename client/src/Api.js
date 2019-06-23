import axios from "axios";
import cookie from "react-cookies";

const api = axios.create({
  baseURL: "http://localhost:4000/",
  withCredentials: true
});

export const boardApi = {
  upload: data =>
    api.post("board/upload", data, {
      headers: {
        'token' : cookie.load('token') || ''
      },
    }),
  getList: () =>
    api.get("board/list", {
    }),
  getDetail: id =>
    api.get(`board/detail/${id}`, {
    }),
  delete: id =>
    api.delete(`board/delete/${id}`, {
      headers: {
        'token' : cookie.load('token') || ''
      },
    }),
  update: data =>
    api.put(`board/update/${data.id}`,data ,{
      headers: {
        'token' : cookie.load('token') || ''
      },
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
    }),
    logout: () => 
      api.get("user/logout",{
        headers: {
          'token' : cookie.load('token') || ''
        }
    }),
    loadUser: () =>
      api.get('/', {
        headers: {
          'token' : cookie.load('token') || ''
        }
    }),
};
