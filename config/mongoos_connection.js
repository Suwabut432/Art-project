const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dbgr = require("debug")("development:mongoose");
const config = require("config");

// Load .env variables
// dotenv.config();  ya show kr skta ha

const connectDB = async () => {
  try {
    const conn = await mongoose
    .connect(`${config.get("MONGODB_URI")}/Art-project`);
    dbgr(`✅ MongoDB connected:`);
  } catch (error) {
    dbgr('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
