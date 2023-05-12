import express, { Application, Request, Response, urlencoded } from "express";
import cors from "cors";

const app: Application = express();

//application route
import UserRoute from "./app/modules/user/user.route";

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.use("/api/v1/user", UserRoute);

export default app;
