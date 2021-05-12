// Imports 
const express = require("express");
const cors = require("cors");

// CONTROLLER IMPORTS
const productController = require("./controllers/productController");
const userController = require("./controllers/userController");

// Instance of express app
const app = express();


// Middleware/ options
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
app.use("/api/products", productController);
app.use("/api/users", userController);


// exports to server 
module.exports = app;
