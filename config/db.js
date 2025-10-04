import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const database_uri = process.env.MONGODB_URI;


//connecting to database
const connectDB = async () => {
  try {
    await mongoose.connect(database_uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
export default connectDB;
