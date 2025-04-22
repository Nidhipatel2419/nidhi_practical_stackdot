const mongoose = require("mongoose");

const standardSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  classcategoryid: { type: Number, required: true },
});

const standards = mongoose.model("standards", standardSchema);
module.exports = standards;
