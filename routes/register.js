const express = require("express");
const OwnerModel = require("../models/owner_model");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("register");
});

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
