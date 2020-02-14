const express = require("express");
const router = express.Router();
const User = require("../models/user");
const crypto = require("crypto"); //Node.js 에서 제공하는 암호화 모듈


// Sign Up
// Post로만 받는다
router.post("/", function(req, res, next) {
  const user = new User();
  // setting values
  user.id = req.body.user.id;
  user.password = req.body.user.password;
  user.name = req.body.user.name;

  user.save(function(err) {
    if (err) {
      console.error(err);
      res.json({ result: 0 });
      return;
    } else { res.json({ result: 1 });
  }});
});

module.exports = router;
