
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error(
        "MONGO_URI is missing. Check your .env file."
      );
    }

    await mongoose.connect(mongoURI);

    console.log("MongoDB Community Server connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

export default connectDB;
