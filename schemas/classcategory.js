const mongoose = require("mongoose");
const classcategoryschema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

const classcategory = mongoose.model("classcategory", classcategoryschema);
module.exports = classcategory;
