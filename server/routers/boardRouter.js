import express from "express";
import routes from "../routes";

const boardRouter = express.Router();


boardRouter.post("/upload", (req, res) => {
    console.log(req);
    console.log("보드 라우터");
    
});

export default boardRouter;