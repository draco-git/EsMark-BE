import express, { Request, Response } from "express";
import { login } from "./apis/login";
import { signup } from "./apis/signup";
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
app.post("/signin", signup);

app.listen(port, () => {
  console.log(`Server is started in port: ${port}`);
});
