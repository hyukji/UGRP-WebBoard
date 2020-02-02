const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  writer: { type: String, required: true },
  body: { type: String, required: true },
  post: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // 2
  updatedAt: { type: Date }
});

module.exports = mongoose.model("Comment", commentSchema);
