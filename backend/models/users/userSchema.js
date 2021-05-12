// Imports mongoose 
const mongodb = require("mongoose");

// Creates a UserSchema for the mongodb database
const userSchema = mongodb.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  orders: { type: Array,}
});

//  exports the the schema as a model and define the colletion name to the database
module.exports = mongodb.model("User", userSchema);
