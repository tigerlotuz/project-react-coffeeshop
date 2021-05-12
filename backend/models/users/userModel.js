// Imports
const mongodb = require("mongoose");
const User = require("../users/userSchema");

// API Functions for the Users

// Register one User
exports.registerUser = (req, res) => {

  User.exists({ email: req.body.email }, (err, result) => {

    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "You made a bad request",
        err,
      });
    }

    if (result) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "The email address is already taken",
      });
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
    });

    newUser
      .save()
      .then(() => {
        res.status(201).json({
          statusCode: 201,
          status: true,
          message: "User was created successfully",
        });
      })
      .catch((err) => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: "Failed to create user",
          err,
        });
      });
  });
};

// Get one User
exports.getUser = (req, res) => {

  User.exists({ email: req.params.id }, (err, result) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "You made a bad request",
      });
    }

    if (result) {
      User.findOne({ email: req.params.id })
        .then((data) => res.status(200).json(data))
        .catch((err) =>
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: err,
          })
        );
    } else {
      res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Ooops, this user does not exist",
      });
    }
  });
};

// Add one Order to a User
exports.addOrder = (req, res) => {
  User.exists({ email: req.params.id }, (err, result) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "You made a bad request.",
      });
    } else {
      User.updateOne({ email: req.params.id }, { $push: { orders: req.body } })
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: "order added successfully.",
          });
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: "Failed to add order.",
          });
        });
    }
  });
};
