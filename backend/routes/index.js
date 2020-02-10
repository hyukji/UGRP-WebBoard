const express = require("express")
const router = express.Router()
const Posting = require("../models/posting")

/* GET main page. */
router.get("/", function(req, res, next) {
  Posting.find()
    .sort({ createdAt: -1 })
    .exec(function(err, postings) {
      res.send(postings)
    })
})

router.get("/:id", function(req, res, next) {
  Posting.findOne({ _id: req.params.id }, function(err, posting) {
    res.send(posting)
  })
  console.log("express 맞게 찾아옴.")
})

router.post("/newposting", function(req, res, next) {
  const posting = new Posting()
  // setting values
  posting.writer = req.body.posting.writer
  posting.title = req.body.posting.title
  posting.body = req.body.posting.body

  posting.save(function(err) {
    if (err) {
      console.error(err)
      res.json({ result: 0 })
      return
    }
    res.json({ result: 1 })
  })
})

module.exports = router
