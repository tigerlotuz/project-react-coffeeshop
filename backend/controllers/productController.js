// imports and instance of Router
const router = require("express").Router();
const productModel = require("../models/products/productModel");

// EndPoints
router.get("/", productModel.getProducts);
router.post("/new", productModel.createProduct);

// export to app
module.exports = router;
