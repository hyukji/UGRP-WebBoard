const mongoose = require("mongoose");
const moment = require("moment");

var ISODate = moment().format("YYYY-MM-DD");

const boardSchema = new mongoose.Schema({
  writer: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  hits: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }, // 2
  showdate: { type: String, default: String(ISODate) } // 2
});

module.exports = mongoose.model("Board", boardSchema);
