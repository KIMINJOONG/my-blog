import express from "express";
import routes from "../routes";
import { postUpload } from "../controller/BoardController";

const boardRouter = express.Router();


boardRouter.post(routes.upload, postUpload);

export default boardRouter;