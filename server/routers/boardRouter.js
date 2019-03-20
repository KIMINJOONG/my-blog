import express from "express";
import routes from "../routes";
import { postUpload, getList } from "../controller/BoardController";

const boardRouter = express.Router();


boardRouter.post(routes.upload, postUpload);
boardRouter.get(routes.boardList, getList);

export default boardRouter;