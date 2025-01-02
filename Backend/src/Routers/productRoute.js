import express from "express";

import {
  addProject,
  listProject,
  removeProject,
  singleProject,
} from "../controller/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProject
);
productRouter.get("/list", listProject);
productRouter.post("/remove", adminAuth, removeProject);
productRouter.post("/single", singleProject);

export default productRouter;
