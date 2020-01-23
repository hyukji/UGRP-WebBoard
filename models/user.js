const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  schoolnum: { type: Number, required: true },
  isAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", UserSchema);
