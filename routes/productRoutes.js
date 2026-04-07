const express = require("express");
const router = express.Router();

const { uploadImages} = require("../middleware/upload")
const { productData } = require("../controllers/productController");


router.post("/", uploadImages.single("product_image"), productData);

module.exports = router;