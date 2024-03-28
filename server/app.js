import express from "express";
import "dotenv/config";
import morgan from "morgan";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
export default app;
