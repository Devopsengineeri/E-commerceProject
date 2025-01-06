import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
} from "../controller/orderController.js";

import authUser from "../middleware/auth.js";

const orderRouter = express.Router();
orderRouter.post("/lost", adminAuth, allOrders);

orderRouter.post("/status", adminAuth, updateStatus);

orderRouter.post("/place", authUser, placeOrder);

orderRouter.post("/stripe", authUser, placeOrderStripe);

orderRouter.post("/razorpay", authUser, placeOrderRazorpay);
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
