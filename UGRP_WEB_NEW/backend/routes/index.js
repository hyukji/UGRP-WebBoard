const express = require("express")
const router = express.Router()
const Posting = require("../models/posting")

/* GET main page. */
router.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public", "index.html"))
})

module.exports = router
