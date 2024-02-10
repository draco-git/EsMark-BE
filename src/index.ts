import express, { Request, Response } from "express";
import { login } from "./apis/login";
import cors from "cors";
import { signup } from "./apis/signup";
const bodyParser = require("body-parser");

const app = express();

const port = 9080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.send("hello world");
});

app.post("/login", login);
app.post("/signin", signup);

app.listen(port, () => {
  console.log(`Server is started in port: ${port}`);
});
