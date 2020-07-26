const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    reqiured: true,
    unique: true,
  },
  password: {
    type: String,
    rquired: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = user = mongoose.model("user", UserSchema);
