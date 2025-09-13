const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const OwnerModel = require("../models/owner_model");
const userModel = require("../models/user_model");
const { has } = require("config");
const router = express.Router();
const registerUser = require("../utils/register-user");


// Middleware setup
router.use(session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true
}));
router.use(flash());

// Route
router.get("/", function(req, res) {
    res.render("register");
});

router.post("/create", registerUser)



if (process.env.NODE_ENV === "development") {
    router.post("/owner", async function(req, res) {
        try {
            const existingOwners = await OwnerModel.find();
            if (existingOwners.length > 0) {
                return res.send("Owner already created");
            }

            const { name, email, password } = req.body;

            const createOwner = await OwnerModel.create({
                name,
                email,
                password
            });

            res.send(createOwner);


        } catch (err) {
            res.send(err.message);
        }
    });
}

module.exports = router;
