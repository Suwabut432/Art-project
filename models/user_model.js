const mongoose = require("mongoose");
const db = require("../config/mongoos_connection");


// Schema create karo
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Model create karo
const user = mongoose.model("user", userSchema);

 // Export model
module.exports = user;



