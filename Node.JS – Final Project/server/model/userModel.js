const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id:Number,
  FullName: String,
  NumOfActions: Number,
});

const user = mongoose.model("user", userSchema);

module.exports = user;
