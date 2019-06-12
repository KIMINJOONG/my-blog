import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import boardRouter from "./routers/boardRouter";
import userRouter from "./routers/userRouter";
import routes from "./routes";
import cors from "cors";
import bodyParser from "body-parser";
import decodeJWT from "./utils/decodeJWT";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const jwt = async (req, res, next) => {
  const token = req.get("X-JWT");
  if (toekn) {
    const user = await decodeJWT(token);
    if (user) {
      req.user = user;
    } else {
      req.user = undefined;
    }
  } else {
    netxt();
  }
  next();
};
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
//app.use(jwt);

app.use(routes.board, boardRouter);
app.use(routes.user, userRouter);

export default app;
