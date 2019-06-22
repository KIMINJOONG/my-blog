import express from "express";
import routes from "../routes";
import { userJoin, postLogin, postLogout } from "../controller/UserController";
import { isLoggedIn } from "../utils/checkLogin";

const userRouter = express.Router();

userRouter.post(routes.userJoin, userJoin);
userRouter.post(routes.userLogin, postLogin);
userRouter.post(routes.userLogout,isLoggedIn, postLogout);

export default userRouter;
