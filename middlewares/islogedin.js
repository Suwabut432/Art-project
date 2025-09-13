const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

require('dotenv').config();

const secretKey = process.env.JWT_TOKEN;


// Middleware to check login
function isLoggedIn(req, res, next) {
    const token = req.cookies.token; // Cookie se token le rahe hain
    if (!token) {
        return res.send("please Login")
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
          res.send("Please Longed in")
        }
        req.user = user; // decoded user data
        next(); // route continue karega
    });
}

module.exports = isLoggedIn;