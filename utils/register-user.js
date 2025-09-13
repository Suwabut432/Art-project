
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user_model"); // apna user model ka path lagao


require('dotenv').config();

const secretKey = process.env.JWT_TOKEN;

async function registerUser(req, res) {
    try {
        let { name, email, password, image } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.send("User already created."); // return added
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const createdUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            image
        });

        const token = jwt.sign(
            { _id: createdUser.id, email: createdUser.email },
            secretKey,
            { expiresIn: "1h" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 3600000
        });

        return res.redirect("/"); // return added
    } catch (err) {
        return res.status(500).send(err.message); // return added
    }
}

module.exports = registerUser;
