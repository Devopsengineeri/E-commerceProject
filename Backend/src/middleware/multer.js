import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = "./uploads";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, uploadDir); // Set destination folder
  },

  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now();
    callback(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
// console.log(upload, "qqqqqqqqq");

export default upload;
