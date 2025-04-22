const mongoose = require("mongoose");

const medium = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

const mediums = mongoose.model("mediums", medium);
module.exports = mediums;
