import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get("/api/upload", (req, res) => {
    console.log("글로벌 라우터");
});

export default globalRouter;