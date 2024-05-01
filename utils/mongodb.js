import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();

const connectMongoDB = async () => {
  try {
    console.log(process.env.NEXT_PUBLIC_MONGODB_URL);
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL);
    console.log("database conneted...");
  } catch (error) {
    console.log("error occured while connecting to database....", error);
  }
};

export default connectMongoDB;
