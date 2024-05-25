import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("Connection failed !!", err);
  });

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
