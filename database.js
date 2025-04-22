const mongoose = require('mongoose');


const mongodb = async () => {
    try {
    await mongoose.connect("mongodb://0.0.0.0:27017/nidhi_practical");
      console.log("Connected with mongoDB successfully");
    } catch (error) {
      console.log("error while connecting with database", error);
    }
  };
  
  module.exports = mongodb;