const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  standardid: { type: Number, required: true },
});

const subjects = mongoose.model("subjects", subjectSchema);
module.exports = subjects;
