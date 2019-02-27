import express from "express";
import routes from "../routes";
import { home } from "../controllers/boardController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get("/api/hello", (req, res) => {
    res.send({express: `HEllo From Express`});
});
globalRouter.post("/api/world", (req, res) => {
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`
    );
});

export default globalRouter;