import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectionDB from "./src/db/connection.js";
import userRouter from "./src/Routers/userRouter.js"; // Fixed path
import productRouter from "./src/Routers/productRoute.js";
import cartRouter from "./src/Routers/cartRouter.js";
import orderRouter from "./src/Routers/orderRouter.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connections
connectionDB();

// static files from server
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/app/user", userRouter);
app.use("/app/product", productRouter);
app.use("/app/cart", cartRouter);
app.use("/app/order", orderRouter);
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log(`Server started on PORT: ${port}`));
