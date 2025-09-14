const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dbgr = require("debug")("development:mongoose");
const config = require("config");

// Load .env variables
// dotenv.config();  ya show kr skta ha

const connectDB = async () => {
  try {
    const conn = await mongoose
    .connect(process.env.MONGO_URL);
    dbgr(`✅ MongoDB connected:`);
  } catch (error) {
    dbgr('❌ MongoDB connection error:', error.message);
  }
};

module.exports = connectDB;
