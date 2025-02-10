require('dotenv').config();
const mongoose = require('mongoose');

// Replace the following URI with your actual MongoDB URI
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/streetFoodVendorDB";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error", error);
  }
};

module.exports = connectDB;


