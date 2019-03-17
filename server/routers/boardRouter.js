import express from "express";
import routes from "../routes";

const boardRouter = express.Router();


boardRouter.get("/upload", (req, res) => {
    console.log("보드 라우터");
});

export default boardRouter;