// Imports and instance of Router
const router = require("express").Router();
const userModel = require("../models/users/userModel");

// EndPoints
router.post("/register", userModel.registerUser);
router.get("/:id", userModel.getUser);
router.patch("/addorder/:id", userModel.addOrder);

// export to app
module.exports = router;
