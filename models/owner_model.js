const mongoose = require("mongoose");
const db = require("../config/mongoos_connection");


// Schema create karo
const ownerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

// Model create karo
const Owner = mongoose.model("Owner", ownerSchema);

 // Export model
module.exports = Owner;
