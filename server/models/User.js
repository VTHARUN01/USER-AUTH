const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  UserName: {
    type: String,
    unique: true,
    required: true,
  },
  FullName: {
    type: String,
    required: true,
  },
  PassWord: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("user", UserSchema);
