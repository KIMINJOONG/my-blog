import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import boardRouter from "./routers/boardRouter";
import userRouter from "./routers/userRouter";
import routes from "./routes";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes.board, boardRouter);
app.use(routes.user, userRouter);

export default app;
