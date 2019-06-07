import express from "express";
import routes from "../routes";
import {
  postUpload,
  getList,
  getDetail,
  boardDelete
} from "../controller/BoardController";

const boardRouter = express.Router();

boardRouter.post(routes.upload, postUpload);
boardRouter.get(routes.boardList, getList);
boardRouter.get(routes.boardDetail, getDetail);
boardRouter.delete(routes.boardDelete, boardDelete);

export default boardRouter;
