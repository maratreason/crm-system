import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const passport = require("passport");

import {keys} from "./config/keys";
import authRoutes from "./routes/auth";
import analyticsRoutes from "./routes/analytics";
import categoryRoutes from "./routes/category";
import orderRoutes from "./routes/order";
import positionRoutes from "./routes/position";
import passMiddleware from "./middleware/passport";

const app = express();

mongoose
    .connect(keys.mongoURI)
    .then(() => console.log("Соединение прошло успешно"))
    .catch((error: any) => console.log(error));
    
app.use(passport.initialize());
passMiddleware(passport);

app.use(require("morgan")("dev"));

app.use("/uploads", express.static("uploads"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require("cors")());

app.use("/api/auth", authRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/position", positionRoutes);

export default app;
