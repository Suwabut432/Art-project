const express = require("express");
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require("path");

const isLoggedIn = require("../middlewares/islogedin");
const Product = require("../models/product_model");
const upload = require("../config/multer-config");

router.get("/", function (req, res) {
    fs.readdir(path.join(__dirname, "../uploads"), async function(err, files) {
        console.log(files);
        const products = Product.find();
        res.render("index", {files, products});
    })
    

})
router.get("/admin", function (req, res) {
    res.render("admin_panel");
})



router.post("/products/create", upload.single("image"), async (req, res) => {
  try {
    // text fields
    const { name, price, discount, bgcolor, textcolor, panelcolor } = req.body;

    // New Product with file path
    const newProduct = new Product({
      name,
      price,
      discount,
      bgcolor,
      textcolor,
      panelcolor,
      image: req.file ? req.file.path : null // DB میں صرف path store کریں
    });

    await newProduct.save();
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving product");
  }
});


module.exports = router;


















module.exports = router;