import express from "express";
import routes from "../routes";
import { postJoin } from "../controller/UserController";

const userRouter = express.Router();

userRouter.post(routes.userJoin, postJoin);

export default userRouter;
