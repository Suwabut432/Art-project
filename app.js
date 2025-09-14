const express = require("express");
const app = express();
const router = express.Router();
const dotenv = require("dotenv");
const Path = require("path");
const cookieParser = require("cookie-parser");


require('dotenv').config();
const connectDB = require('./config/mongoos_connection');
connectDB(); // Call the function
require('dotenv').config();

   // import Models
const userModel = require("./models/user_model");
const ownerModel = require("./models/owner_model");

  // import Routes
const index = require("./routes/index");
const category = require("./routes/category");
const register = require("./routes/register");
const owner = require("./routes/owner");

app.use(cookieParser());
app.use(express.json());
app.set('views', Path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static(Path.join(__dirname, "public")))


app.use("/", index);
app.use("/category", category);
app.use("/register", register)
app.use("/owner", owner);




app.listen(3000);