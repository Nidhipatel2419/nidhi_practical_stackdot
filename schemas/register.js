const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  instituteid: { type: String, required: true },
  institutename: { type: String, required: true },
  educationboard: { type: String },
  medium: { type: String },
  classcategory: { type: String },
  standard: { type: String },
  subject: { type: String },
  university: { type: String },
  degreetype: { type: String },
  compatativeexams: { type: String }
});

const register = mongoose.model("register", registerSchema);
module.exports = register;
