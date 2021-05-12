// Imports mongoose 
const mongodb = require("mongoose");

// Creates a ProductSchema for the mongodb database
const productSchema = mongodb.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
});

//  exports the the schema as a model and define the colletion name to the database
module.exports = mongodb.model("Product", productSchema);
