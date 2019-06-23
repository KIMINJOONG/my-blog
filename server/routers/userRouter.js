import express from "express";
import routes from "../routes";
import { userJoin, postLogin, userLogout } from "../controller/UserController";
import { isLoggedIn } from "../utils/checkLogin";

const userRouter = express.Router();

userRouter.post(routes.userJoin, userJoin);
userRouter.post(routes.userLogin, postLogin);
userRouter.get(routes.userLogout,isLoggedIn, userLogout);

export default userRouter;
