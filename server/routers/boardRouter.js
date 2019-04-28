import express from "express";
import routes from "../routes";
import { postUpload, getList, getDetail } from "../controller/BoardController";

const boardRouter = express.Router();

boardRouter.post(routes.upload, postUpload);
boardRouter.get(routes.boardList, getList);
boardRouter.get(routes.boardDetail, getDetail);

export default boardRouter;
