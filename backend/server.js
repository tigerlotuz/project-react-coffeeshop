// Imports
const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

// Variables
const PORT = process.env.PORT || 8085;
const serverURL = "http://localhost:" + PORT;
const mongoURL = process.env.MONGO_URL;

// Server start
app.listen(PORT, () => console.log(`Server us running at ${serverURL}`));

// Connection to my MongoDB database
mongoose.set("useCreateIndex", true).connect(
  mongoURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log(`Connected to DB`)
);
