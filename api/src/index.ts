import express, { Router } from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

import router from "./routes/index.js";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, "0.0.0.0", () => {
  console.log("Server running on http://0.0.0.0:8080/");
});

const MONGO_URL =
  "mongodb+srv://stasps210:YW4uNiZE8qSOx4qk@cluster0.cgiwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
