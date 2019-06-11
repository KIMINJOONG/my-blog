import express from "express";
import routes from "../routes";
import { postJoin, postLogin } from "../controller/UserController";

const userRouter = express.Router();

userRouter.post(routes.userJoin, postJoin);
userRouter.post(routes.userLogin, postLogin);

export default userRouter;
