import mongoose from "mongoose";

const connectionDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connection");
  });
  await mongoose.connect(`mongodb://localhost:27017/e-commerce`);
};

export default connectionDB;
