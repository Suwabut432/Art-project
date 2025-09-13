const express = require("express");
const router = express.Router();

const isLoggedIn = require("../middlewares/islogedin");

router.get("/", function(req, res) {
    res.render("category");
})


module.exports = router;