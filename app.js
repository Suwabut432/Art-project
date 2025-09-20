const express = require("express");
const app = express();
const router = express.Router();
const dotenv = require("dotenv");
const Path = require("path");
const cookieParser = require("cookie-parser");
const fs = require('fs');

require('dotenv').config();
const connectDB = require('./config/mongoos_connection');
connectDB(); // Call the function
require('dotenv').config();

   // import Models
const userModel = require("./models/user_model");
const ownerModel = require("./models/owner_model");
const productModel = require("./models/product_model");
  // import Routes
const index = require("./routes/index");


app.use(cookieParser());
app.use(express.json());
app.set('views', Path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static(Path.join(__dirname, "public")))
app.use('/uploads', express.static('uploads'));



app.use("/", index);



app.listen(3000);