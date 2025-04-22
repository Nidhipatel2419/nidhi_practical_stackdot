const mongoose = require("mongoose");
const institute = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

const institutes = mongoose.model("institutes", institute);
module.exports = institutes;
