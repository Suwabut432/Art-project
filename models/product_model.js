const mongoose = require("mongoose");
const db = require("../config/mongoos_connection");

// Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String, 
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  bgcolor: { type: String }, 
  textcolor: { type: String },
  panelcolor: { type: String }
});

// Model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;




