import express from "express";
import routes from "../routes";
import {
  postUpload,
  searchBoard,
  getList,
  getDetail,
  boardDelete,
  boardUpdate
} from "../controller/BoardController";
import { isLoggedIn } from "../utils/checkLogin";

const boardRouter = express.Router();

boardRouter.post(routes.upload, isLoggedIn ,postUpload);
boardRouter.get(routes.search, searchBoard)
boardRouter.get(routes.boardList, getList);
boardRouter.get(routes.boardDetail, getDetail);
boardRouter.delete(routes.boardDelete, isLoggedIn, boardDelete);
boardRouter.put(routes.boardUpdate, isLoggedIn, boardUpdate);

export default boardRouter;
