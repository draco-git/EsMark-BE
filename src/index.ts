import express, { Request, Response } from "express";
import { login } from "./apis/login";
const bodyParser = require("body-parser");

const app = express();

const port = 9080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("hello world");
});

app.post("/login", login);

app.listen(port, () => {
  console.log("this is sample");
});
