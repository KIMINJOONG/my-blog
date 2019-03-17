import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRoter";
import boardRouter from "./routers/boardRouter";
import routes from "./routes";

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes.board, boardRouter);


export default app;