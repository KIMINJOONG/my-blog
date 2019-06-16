import express from "express";
import routes from "../routes";
import { postJoin, postLogin, postLogout } from "../controller/UserController";

const userRouter = express.Router();

userRouter.post(routes.userJoin, postJoin);
userRouter.post(routes.userLogin, postLogin);
userRouter.post(routes.userLogout, postLogout);

export default userRouter;
