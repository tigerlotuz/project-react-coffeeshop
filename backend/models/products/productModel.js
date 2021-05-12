// imports 
const mongodb = require("mongoose");
const Product = require("./productSchema");

// API Functions for the Products

//  Get All Products 
exports.getProducts = (req, res) => {

  Product.find({}, (err, data) => {

    if (err) {
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message:
          err.message || "Somthing went wrong when fetching the products",
      });
    }

    res.status(200).json(data);

  });

};

// Create one Product
exports.createProduct = (req, res) => {

  Product.exists({ title: req.body.title }, (err, result) => {

    if (err) {
      res.status(500).json(err);
    }

    if (result) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message:
          "Bad request, Product with that name already exists, Please update product instead.",
      });
    }
           
    const newProduct = new Product({
      id: req.body.id,
      title: req.body.title,
      desc: req.body.desc,
      price: req.body.price,
    });

    newProduct
      .save()
      .then(() => {
        res.status(201).json({
          statusCode: 201,
          status: true,
          message: "Product created successfully.",
        });
      })

      .catch((err) => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: "failed to create product.",
        });
      });
  });
};
