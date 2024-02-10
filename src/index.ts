import express, { Request, Response } from "express";
const app = express();

const port = 9080;

app.get("/", (_req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("this is sample");
});
