const mongoose = require("mongoose");
const educationboardschema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

const educationboard = mongoose.model("educationboards", educationboardschema);
module.exports = educationboard;
