import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cookieRoutes from "./routes/cookieRoutes.js";
import mailRoutes from "./routes/mailRoutes.js";
import path from "path";
import morgan from "morgan";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.APP_URL,
    credentials: true,
  })
);
app.use(cookieParser());

//Tell express to fetch files from the /js directory
const __dirname = path.resolve();
app.use(express.static(__dirname + "/js"));
app.set("view engine", "jade");

// Routes registration
app.use("/api/users", userRoutes);
app.use("/api/cookie", cookieRoutes);
app.use("/api/mail", mailRoutes);

// middleware
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
