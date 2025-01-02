import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectionDB from "./src/db/connection.js";
import connectCloudinary from "./src/db/cloudnary.js"; // Corrected filename
import userRouter from "./src/Routers/userRouter.js"; // Fixed path
import productRouter from "./src/Routers/productRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Database Connections
connectionDB();
connectCloudinary();

// Routes
app.use("/app/user", userRouter);
app.use("/app/product", productRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log(`Server started on PORT: ${port}`));
